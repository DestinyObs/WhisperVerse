using Microsoft.AspNetCore.Mvc;

namespace WhisperVerse.Controllers
{
    public class PostController : Controller
    {
        public IActionResult Create()
        {
            return View();
        }
    }
}
