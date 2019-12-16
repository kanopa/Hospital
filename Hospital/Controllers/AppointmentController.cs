﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BLL.interfaces;
using Dal.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hospital.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly IAppointmentService appointmentService;
        public AppointmentController(IAppointmentService appointmentService)
        {
            this.appointmentService = appointmentService;
        }
        [HttpPost]
        public async Task<Appointment> AddAppointment(NewAppointment appointment)
        {
            return await appointmentService.AddAppointment(appointment);
        }
        [HttpGet]
        public  async Task<Appointment> GetAppointment(Appointment appointment)
        {
            return null;
        }
    }
}