using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Dal.context;
using Dal.interfaces;
using Dal.models;

namespace Dal.repositories
{
    public class CardRepository: ICardRepository
    {
        private HospitalContext db;
        public CardRepository(HospitalContext db)
        {
            this.db = db;
        }
        public async Task<Card> AddCard(Card card)
        {
            var newcard = await db.Cards.AddAsync(card);

            await db.SaveChangesAsync();
            return newcard.Entity;
        }
    }
}
