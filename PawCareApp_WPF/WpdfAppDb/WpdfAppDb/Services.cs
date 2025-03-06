using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpdfAppDb
{
    public class Services
    {
        public int Id { get; set; } //Word "Id" or "ProductId" will be used as primary key in entity framework
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Resource_person { get; set; }

    }
}
