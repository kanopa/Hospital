using System;
using System.Collections.Generic;
using System.Text;

namespace Dal.models
{
    public class Card
    {
        public int Id { get; set; }
        public int PatientId { get; set; }
        public Patient Patient { get; set; }
        public ICollection<CardNote> CardNotes { get; set; }
    }
}
