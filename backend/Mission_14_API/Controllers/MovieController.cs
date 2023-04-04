using Microsoft.AspNetCore.Mvc;
using Mission_14_API.Data;

namespace Mission_14_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MovieController : Controller
    {
        private readonly MovieContext context;

        public MovieController(MovieContext temp)
        {
            context = temp;
        }

        public IEnumerable<Movie> Get()
        {
            return context.Movies.ToArray();
        }
    }
}
