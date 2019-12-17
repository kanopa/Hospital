using Dal.context;
using Dal.interfaces;
using Dal.models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.repositories
{
    public class AppointmentRepository : IAppointmentRepository
    {
        private readonly HospitalContext db;

        public AppointmentRepository(HospitalContext db)
        {
            this.db = db;
        }
        public async Task<Appointment> AddAppointment(Appointment appointment)
        {
            var newAppointment = await db.Appointments.AddAsync(appointment);
            await db.SaveChangesAsync();
            return newAppointment.Entity;
        }
        public async Task<List<Appointment>> GetAll()
        {
            return await db.Appointments.ToListAsync();
        }
        public async Task<List<Appointment>> GetById(int id)
        {
            return await db.Appointments.Where(x => x.DoctorId == id).ToListAsync();
        }
    }
}
