using Microsoft.AspNetCore.Mvc;

namespace SimpleHTTPServer
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }

    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAnyOrigin",
                    builder =>
                    {
                        builder.AllowAnyOrigin()
                               .AllowAnyMethod()
                               .AllowAnyHeader();
                    });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILogger<Startup> logger)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error");
            }

            app.UseRouting();
            app.UseCors("AllowAnyOrigin");

            app.Use(async (context, next) =>
            {
                logger.LogInformation($"Received request: {context.Request.Method} {context.Request.Path}");
                await next();
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class HelloWorldController : ControllerBase
    {
        [HttpGet("")]
        public IActionResult GetSampleData()
        {
            var data = new { message = "Hello, world!" };
            return Ok(data);
        }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class FortuneCookieController : ControllerBase
    {

        const string filePath = "fortune.txt";
        [HttpGet("")]
        public IActionResult GetFortuneCookie()
        {
            if (System.IO.File.Exists(filePath))
            {
                Random random = new Random();
                int cookieNumber = random.Next(1, System.IO.File.ReadLines(filePath).Count());
                using (StreamReader reader = new StreamReader(filePath))
                {
                    if (reader.Peek() >= 0)
                    {
                        return Ok(new { message = System.IO.File.ReadLines(filePath).Skip(cookieNumber - 1).Take(1).First() });
                    }
                    else
                    {
                        Console.WriteLine(filePath + " is empty");
                        return Ok(new { message = "For Fortune, fortune.txt needs Fortune. (Edit the fortune.txt)" });
                    }
                }
            }
            else
            {
                Console.WriteLine("File does not exist.");
                try
                {
                    Console.WriteLine("Creating empty " + filePath);
                    FileStream fs = System.IO.File.Create(filePath);
                    fs.Close();
                    return Ok(new { message = "For Fortune, fortune.txt needs Fortune. (Edit the fortune.txt)" });
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Could not create file: ", ex.Message);
                    return StatusCode(500, "Could not create file: ");
                }
            }
        }
    }
}
