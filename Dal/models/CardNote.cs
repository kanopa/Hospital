using System;
using System.Collections.Generic;
using System.Text;

namespace Dal.models
{
    public class CardNote
    {
        public int CardId { get; set; }
        public Card Card { get; set; }
        public int DoctorId { get; set; }
        public Doctor Doctor { get; set; }
        public int AppointmentId { get; set; }
        public Appointment Appointment { get; set; }
        public string Diagnos { get; set; }
    }
}
