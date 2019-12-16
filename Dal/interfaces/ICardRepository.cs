using Dal.models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Dal.interfaces
{
    public interface ICardRepository
    {
        Task<Card> AddCard(Card card);
    }
}
