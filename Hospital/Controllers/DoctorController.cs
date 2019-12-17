using System;
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
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorService doctorService;
        public DoctorController(IDoctorService doctorService)
        {
            this.doctorService = doctorService;
        }
        [HttpGet]
        public async Task<ICollection<Doctor>> GetDoctors()
        {
            return await doctorService.GetDoctors();
        }
        [HttpPost]
        public async Task<Doctor> AddDoctor(Doctor doctor)
        {
            return await doctorService.AddDoctor(doctor);
        }
        [HttpDelete("{id}")]
        public async Task DeleteDoctor(int id)
        {
            await doctorService.DeleteDoctor(id);
        }
    }
}