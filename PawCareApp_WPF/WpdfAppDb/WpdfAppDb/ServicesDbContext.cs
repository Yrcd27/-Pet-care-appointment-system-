using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpdfAppDb
{
    public class ServicesDbContext : DbContext
    {
        public DbSet<Services> Products { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source = C:\Users\Dell\Desktop\Git\-Pet-care-appointment-system-\PawCareApp_WPF\Database\pawcare_app.db");
        }
    }
}
