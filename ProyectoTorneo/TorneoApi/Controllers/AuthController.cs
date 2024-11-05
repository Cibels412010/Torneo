using Microsoft.AspNetCore.Mvc;

[Route("Api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly AuthService _authService;

    public AuthController(AuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginModel login)
    {
        var token = _authService.Authenticate(login.Username, login.Password);

        if (token == null)
        {
            return Unauthorized("Credenciales incorrectas");
        }

        return Ok(new { Token = token });
    }
}
