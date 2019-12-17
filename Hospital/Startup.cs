using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BLL.interfaces;
using BLL.services;
using Dal.context;
using Dal.interfaces;
using Dal.repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Hospital
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyMethod()
                       .AllowAnyHeader()
                       .AllowCredentials()
                       .WithOrigins("http://localhost:4200");
            }));
            string connectionString = Configuration["ConnectionStrings:ConnectionLocal"];
                
            services.AddDbContext<HospitalContext>(options =>
                options.UseSqlServer(connectionString), ServiceLifetime.Scoped);
            services.AddScoped<IAppointmentRepository, AppointmentRepository>();
            services.AddScoped<ICardNotesRepository, CardNotesRepository>();
            services.AddScoped<ICardRepository, CardRepository>();
            services.AddScoped<IDoctorRepository, DoctorRepository>();
            services.AddScoped<IPatientRepository, PatientRepository>();
            services.AddScoped<IScheduleRepository, ScheduleRepository>();

            services.AddScoped<IAppointmentService, AppointmentService>();
            services.AddScoped<ICardNotesService, CardNotesService>();
            services.AddScoped<ICardService, CardService>();
            services.AddScoped<IDoctorService, DoctorService>();
            services.AddScoped<IPatientService, PatientService>();
            services.AddScoped<IScheduleService, ScheduleService>();

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("MyPolicy");

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
