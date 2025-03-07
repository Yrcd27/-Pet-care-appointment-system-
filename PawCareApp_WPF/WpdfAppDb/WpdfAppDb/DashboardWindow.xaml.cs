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
        
        // Keep track of newly added service IDs during this run
        private HashSet<int> _newServiceIds = new HashSet<int>();

        public DashboardWindow()
        {
            InitializeComponent();
            // Optionally load data when the window opens
            this.Loaded += DashboardWindow_Loaded;
        }

        private void DashboardWindow_Loaded(object sender, RoutedEventArgs e)
        {
            LoadData();
        }

        private void LoadData()
        {
            ServicesGrid.ItemsSource = _db.Products.ToList();
        }

        private void Add_Vaccination(object sender, RoutedEventArgs e)
        {
            if (ServicesGrid.SelectedItem is Services selectedService)
            {
                // Update existing record
                selectedService.Name = "Vaccination";
                selectedService.Price = 4000;
                selectedService.Resource_person = "Dr. Nuwan (Veterinarian)";
                _db.SaveChanges();
            }
            else
            {
                // Create new record
                var newService = new Services
                {
                    Name = "Vaccination",
                    Price = 4000,
                    Resource_person = "Dr. Nuwan (Veterinarian)"
                };
                _db.Products.Add(newService);
                _db.SaveChanges();

                // The newService.Id is assigned after SaveChanges
                _newServiceIds.Add(newService.Id);
            }

            LoadData();
        }

        private void Add_Pet_Grooming(object sender, RoutedEventArgs e)
        {
            if (ServicesGrid.SelectedItem is Services selectedService)
            {
                // Update existing record
                selectedService.Name = "Pet Grooming";
                selectedService.Price = 1500;
                selectedService.Resource_person = "Sarah (Certified Pet Groomer)";
                _db.SaveChanges();
            }
            else
            {
                // Create new record
                var newService = new Services
                {
                    Name = "Pet Grooming",
                    Price = 1500,
                    Resource_person = "Sarah (Certified Pet Groomer)"
                };
                _db.Products.Add(newService);
                _db.SaveChanges();

                // Track newly added ID
                _newServiceIds.Add(newService.Id);
            }

            LoadData();
        }

        private void Add_Health_Checkup(object sender, RoutedEventArgs e)
        {
            if (ServicesGrid.SelectedItem is Services selectedService)
            {
                // Update existing record
                selectedService.Name = "Health Checkup";
                selectedService.Price = 5000;
                selectedService.Resource_person = "Dr. Priya (Veterinary Surgeon)";
                _db.SaveChanges();
            }
            else
            {
                // Create new record
                var newService = new Services
                {
                    Name = "Health Checkup",
                    Price = 5000,
                    Resource_person = "Dr. Priya (Veterinary Surgeon)"
                };
                _db.Products.Add(newService);
                _db.SaveChanges();

                // Track newly added ID
                _newServiceIds.Add(newService.Id);
            }

            LoadData();
        }

        private void Add_Pet_Training(object sender, RoutedEventArgs e)
        {
            if (ServicesGrid.SelectedItem is Services selectedService)
            {
                // Update existing record
                selectedService.Name = "Pet Training";
                selectedService.Price = 3000;
                selectedService.Resource_person = "Ramesh (Professional Pet Trainer)";
                _db.SaveChanges();
            }
            else
            {
                // Create new record
                var newService = new Services
                {
                    Name = "Pet Training",
                    Price = 3000,
                    Resource_person = "Ramesh (Professional Pet Trainer)"
                };
                _db.Products.Add(newService);
                _db.SaveChanges();

                // Track newly added ID
                _newServiceIds.Add(newService.Id);
            }

            LoadData();
        }

        private void Add_Pet_Boarding(object sender, RoutedEventArgs e)
        {
            if (ServicesGrid.SelectedItem is Services selectedService)
            {
                // Update existing record
                selectedService.Name = "Pet Boarding";
                selectedService.Price = 2500;
                selectedService.Resource_person = "Anjali (Pet Care Specialist)";
                _db.SaveChanges();
            }
            else
            {
                // Create new record
                var newService = new Services
                {
                    Name = "Pet Boarding",
                    Price = 2500,
                    Resource_person = "Anjali (Pet Care Specialist)"
                };
                _db.Products.Add(newService);
                _db.SaveChanges();

                // Track newly added ID
                _newServiceIds.Add(newService.Id);
            }

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

        private void ComboBox_Loaded(object sender, RoutedEventArgs e)
        {
            ComboBox comboBox = sender as ComboBox;

           
            DataGridRow row = FindAncestor<DataGridRow>(comboBox);

           
            if (row?.Item is Services currentService)
            {
                
                if (_newServiceIds.Contains(currentService.Id))
                {
                    comboBox.SelectedIndex = 0; // Ongoing
                }
                else
                {
                    comboBox.SelectedIndex = 1; // Finished
                }
            }
        }

       
        public static T FindAncestor<T>(DependencyObject dependencyObject) where T : DependencyObject
        {
            DependencyObject parent = VisualTreeHelper.GetParent(dependencyObject);

            while (parent != null && !(parent is T))
            {
                parent = VisualTreeHelper.GetParent(parent);
            }

            return parent as T;
        }


    }
}


