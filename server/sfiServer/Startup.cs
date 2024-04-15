// // using Microsoft.AspNetCore.Builder;
// // using Microsoft.AspNetCore.Hosting;
// // using Microsoft.AspNetCore.Http;
// // using Microsoft.Extensions.DependencyInjection;
// // using Microsoft.Extensions.Hosting;
// // using Newtonsoft.Json;

// namespace SimpleHTTPServer
// {
//     public class Startup
//     {
//         public void ConfigureServices(IServiceCollection services)
//         {
//             services.AddControllers();
//         }

//         public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
//         {
//             if (env.IsDevelopment())
//             {
//                 app.UseDeveloperExceptionPage();
//             }

//             app.UseRouting();

//             app.UseEndpoints(endpoints =>
//             {
//                 endpoints.MapControllers();
//             });
//         }
//     }

//     public class SampleController : ControllerBase
//     {
//         [HttpGet("/api/sample")]
//         public IActionResult GetSampleData()
//         {
//             var data = new { message = "Hello, world!" };
//             return Ok(data);
//         }
//     }
// }
