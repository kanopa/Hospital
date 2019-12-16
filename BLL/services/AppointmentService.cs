using BLL.interfaces;
using Dal.interfaces;
using Dal.models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BLL.services
{
    public class AppointmentService : IAppointmentService
    {
        private readonly IAppointmentRepository appointmentRepository;
        private readonly IPatientRepository patientRepository;
        public AppointmentService(IAppointmentRepository appointmentRepository, IPatientRepository patientRepository)
        {
            this.appointmentRepository = appointmentRepository;
            this.patientRepository = patientRepository;
        }
        public async Task<Appointment> AddAppointment(NewAppointment appointment)
        {
            var pat = await this.patientRepository.GetByName(appointment.Full_Name);
            if(pat == null)
            {
                var newPat = new Patient()
                {
                    Full_Name = appointment.Full_Name,
                    Card = new Card()
                };
                pat = await patientRepository.AddPatient(newPat);
            }
            var app = new Appointment()
            {
                PatientId = pat.Id,
                DoctorId = appointment.Id_Doctor,
                End_Appointment = appointment.End_Appointment,
                Start_Appointment = appointment.Start_Appointment
            };
            return await this.appointmentRepository.AddAppointment(app);
        }
    }
}
