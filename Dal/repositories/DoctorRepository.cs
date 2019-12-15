using Dal.context;
using Dal.interfaces;
using Dal.models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Dal.repositories
{
    public class DoctorRepository : IDoctorRepository
    {
        private HospitalContext db;
        public DoctorRepository(HospitalContext db)
        {
            this.db = db;
        }
        public async Task<Doctor> AddDoctor(Doctor doctor)
        {
            var newDoctor = await db.Doctors.AddAsync(doctor);
            await db.SaveChangesAsync();
            return newDoctor.Entity;
        }

        public async Task DeleteDoctor(int id)
        {
            var find = await db.Doctors.FirstOrDefaultAsync(x => x.Id == id);
            db.Doctors.Remove(find);
            await db.SaveChangesAsync();
        }

        public async Task<ICollection<Doctor>> GetDoctors()
        {
            return await db.Doctors.Include(x => x.CardNotes).ToListAsync();
        }
    }
}
