using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace WpdfAppDb
{
    /// <summary>
    /// Interaction logic for DashboardWindow.xaml
    /// </summary>
    public partial class DashboardWindow : Window
    {
        private ServicesDbContext _db = new ServicesDbContext();
        public DashboardWindow()
        {
            InitializeComponent();
        }

        private void LoadData()
        {
            ServicesGrid.ItemsSource = _db.Products.ToList();
        }

        private void Add_Vaccination(object sender, RoutedEventArgs e)
        {
            // Check if there is a selected row in the DataGrid
            if (ServicesGrid.SelectedItem is Services selectedService)
            {
                // Update the existing Product
                selectedService.Name = "Vaccination";
                selectedService.Price = 4000;
                selectedService.Resource_person = "Dr. Nuwan (Veterinarian)";

                // Since 'selectedProduct' is already tracked, just save changes
                _db.SaveChanges();
            }
            else
            {
                // Otherwise, create a new Product
                var newService = new Services
                {
                    Name = "Vaccination",
                    Price = 4000,
                    Resource_person = "Dr. Nuwan (Veterinarian)"
                };
                _db.Products.Add(newService);
                _db.SaveChanges();
            }

            // Refresh the DataGrid to reflect changes
            LoadData();
        }


        private void Add_Pet_Grooming(object sender, RoutedEventArgs e)
        {
            // Check if there is a selected row in the DataGrid
            if (ServicesGrid.SelectedItem is Services selectedService)
            {
                // Update the existing Product
                selectedService.Name = "Pet Grooming";
                selectedService.Price = 1500;
                selectedService.Resource_person = "Sarah (Certified Pet Groomer)";

                // Since 'selectedProduct' is already tracked, just save changes
                _db.SaveChanges();
            }
            else
            {
                // Otherwise, create a new Product
                var newService = new Services
                {
                    Name = "Pet Grooming",
                    Price = 1500,
                    Resource_person = "Sarah (Certified Pet Groomer)"
                };
                _db.Products.Add(newService);
                _db.SaveChanges();
            }

            // Refresh the DataGrid to reflect changes
            LoadData();
        }


        private void Add_Health_Checkup(object sender, RoutedEventArgs e)
        {
            // Check if there is a selected row in the DataGrid
            if (ServicesGrid.SelectedItem is Services selectedService)
            {
                // Update the existing Product
                selectedService.Name = "Health Checkup";
                selectedService.Price = 5000;
                selectedService.Resource_person = "Dr. Priya (Veterinary Surgeon)";

                // Since 'selectedProduct' is already tracked, just save changes
                _db.SaveChanges();
            }
            else
            {
                // Otherwise, create a new Product
                var newService = new Services
                {
                    Name = "Health Checkup",
                    Price = 5000,
                    Resource_person = "Dr. Priya (Veterinary Surgeon)"
                };
                _db.Products.Add(newService);
                _db.SaveChanges();
            }

            // Refresh the DataGrid to reflect changes
            LoadData();
        }


        private void Add_Pet_Training(object sender, RoutedEventArgs e)
        {
            // Check if there is a selected row in the DataGrid
            if (ServicesGrid.SelectedItem is Services selectedService)
            {
                // Update the existing Product
                selectedService.Name = "Pet Training";
                selectedService.Price = 3000;
                selectedService.Resource_person = "Ramesh (Professional Pet Trainer)";

                // Since 'selectedProduct' is already tracked, just save changes
                _db.SaveChanges();
            }
            else
            {
                // Otherwise, create a new Product
                var newService = new Services
                {
                    Name = "Pet Training",
                    Price = 3000,
                    Resource_person = "Ramesh (Professional Pet Trainer)"
                };
                _db.Products.Add(newService);
                _db.SaveChanges();
            }

            // Refresh the DataGrid to reflect changes
            LoadData();
        }

        private void Add_Pet_Boarding(object sender, RoutedEventArgs e)
        {
            // Check if there is a selected row in the DataGrid
            if (ServicesGrid.SelectedItem is Services selectedService)
            {
                // Update the existing Product
                selectedService.Name = "Pet Boarding";
                selectedService.Price = 2500;
                selectedService.Resource_person = "Anjali (Pet Care Specialist)";

                // Since 'selectedProduct' is already tracked, just save changes
                _db.SaveChanges();
            }
            else
            {
                // Otherwise, create a new Product
                var newService = new Services
                {
                    Name = "Pet Boarding",
                    Price = 2500,
                    Resource_person = "Anjali (Pet Care Specialist)"
                };
                _db.Products.Add(newService);
                _db.SaveChanges();
            }

            // Refresh the DataGrid to reflect changes
            LoadData();
        }


        private void Delete_Service(object sender, RoutedEventArgs e)
        {
            if (ServicesGrid.SelectedItem is Services p)
            {
                _db.Products.Remove(p);
                _db.SaveChanges();
                LoadData();
            }

        }
    }
}
