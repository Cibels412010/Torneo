using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using TorneoApi.Models;
using TorneoBack.Repository;
using TorneoBack.Repository.Contracts;
using TorneoBack.Service;
using TorneoBack.Service.Contracts;

var builder = WebApplication.CreateBuilder(args);

// Configurar JWT Bearer

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
    };
});


builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("AdminOnly", policy => policy.RequireRole("Admin"));
    options.AddPolicy("ArbitroOnly", policy => policy.RequireRole("Arbitro"));
    options.AddPolicy("JugadorOnly", policy => policy.RequireRole("Jugador"));
});


// Agregar servicios al contenedor.
builder.Services.AddControllers();
// Configuraci�n de Swagger para desarrollo.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configuraci�n de la base de datos.
builder.Services.AddDbContext<TorneoContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Configuraci�n de repositorios y servicios.
builder.Services.AddScoped<IJugadorRepository, JugadorRepository>();
builder.Services.AddScoped<ITorneoRepository, TorneoRepository>();
builder.Services.AddScoped<IEquiposRepository, EquiposRepository>();
builder.Services.AddScoped<ITorneoService, TorneoService>();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IPartidosRepository, PartidosRepository>();
builder.Services.AddScoped<IEventosRepository, EventosRepository>();




// Configuraci�n de CORS para permitir todos los or�genes, m�todos y encabezados.
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirTodo", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configuraci�n del pipeline HTTP.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Aplicar la pol�tica CORS que permite cualquier origen.
app.UseCors("PermitirTodo");

// Usar la autenticaci�n
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
