   M S B A M L   `   `   `  ����D  @WpdfAppDb, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null%clr-namespace:WpdfAppDb	WpdfAppDb  5          WpdfAppDb.DashboardWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5      R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      )localclr-namespace:WpdfAppDb     5        � Title$   Paw Care - DashboardWindow��5      $	��600��60   $
��1000��6=   .��5	      �  � RowDefinitions 5
   
   �� 5      $
��0.5* �6   �� 5      $��4* �6    � ColumnDefinitions 5   
   �� 5      $��3* �6   �� 5      $��1* �6   .+�5   
   �� $��0��6   $��0��6!   $��2��5      $��28(�5       �� Padding$ 5q�5      $��Center=�5      $
��Bold"�5      $��Services Dashboard��5      6,   �� 5   
   $��1��6   $��1��6"   .+�5      �� $��Select and Add a service��5      $��20(�5      $ 5q�5       $��Center=�5!      $
��Bold"�5"       � ToolTip 5#      �� 5$      .+�5%      �� $��Add a New Service��6$   $
��Bold"�6=   �� 5&      $,��&Choose a service to add from the list.��6$   �� 5'      $)��#Click a button to add that service.��6$   �� 5(      $��Update a existing Service��6$   $
��Bold"�6E   �� 5)      $,��&Select the row that you want to update��6$   �� 5*      $3��-Click the button that contain updated service��6$   5+      5-      �� 5/      -   5        $��20(�5/      $��Center=�50      $��8q�51      $��5q�52      ���#FF6200
�������$��SemiBold"�55      .��56   )   Vaccination57      �� 58      -   5        $��20(�58      $��8q�59      $��5q�5:      ���#CC4E00
�������$��SemiBold"�5=      .��5>   *   Pet Grooming5?      �� 5@      -   5        $��20(�5@      $��8q�5A      $��5q�5B      ���#993C00$��SemiBold"�5E      
�������.��5F   $   Health Checkup5G      �� 5H      -   5        $��20(�5H      $��8q�5I      $��5q�5J      ���#662B00$��SemiBold"�5M      
�������.��5N   $   Pet Training5O      �� 5P      -   5        $��20(�5P      $��8q�5Q      $��5q�5R      ���#331500$��SemiBold"�5U      
�������.��5V   $   Pet Boarding5W      �� 5X      $!��Select and Delete a service��5Y      $��18(�5Z      $ 8,15,8,5q�5[      $��Center=�5\      $
��Bold"�5]       5^      �� 5_      .+�5`      �� $��Delete a Service��6$   $
��Bold"�6<   �� 5a      $,��&Select the row that you want to delete��6$   �� 5b      $,��&Click a button to Delete that service.��6$   5c      5e      �� 5f      -   5        $��20(�5f      $��8,8,8,10q�5g      $��5q�5h      
���  ��$��SemiBold"�5j      
�������.��5l   $   Delete5m      5n      &   System.Windows.Controls.DataGrid  5p   
   -   5          Name$ ServicesGrid��5q         AutoGenerateColumns$ False��5r      $��1��5s      $��0��5t      $��1��5u      $��Stretch=�5v      $��Stretch=�5w      
�������   GridLinesVisibility$	 All=�5y         CanUserAddRows$ False��5z      	 �� AlternationCount$	 2��5{      
   HeadersVisibility$	
 All=�5|      $��14(�5}      $��SemiBold"�5~         AlternatingRowBackground �#F0F0F0   ColumnHeaderStyle 5�      �� 5�       �� 
TargetType=  7System.Windows.Controls.Primitives.DataGridColumnHeader"  6   .�5�      ��  �� Property � �� �� Value
 �����63   �� 5�       � ��$ 5q�60   �� 5�       � ��$
 Bold"�63   �� 5�       � ��$ 18(�61   �� 5�       � ��
 �����63   �� 5�       � ��$ Center=�6C   �� 5�       � ��
 �����64   �� 5�       � ��$ 0,0,0,1q�68   5�         	CellStyle 5�      �� 5�      *  $System.Windows.Controls.DataGridCell"  6   .�5�      ��  �@��TextAlignment$ Center=�6@   5�         RowStyle 5�      �� 5�      )  #System.Windows.Controls.DataGridRow"  6   .�5�      ��  � ��
 �����63   5�         Columns 5�      0  *System.Windows.Controls.DataGridTextColumn  5�      ,  &System.Windows.Controls.DataGridColumn   Header$ Service Name��6%      Width5  /System.Windows.Controls.DataGridLengthConverter$	 180 6T   1  +System.Windows.Controls.DataGridBoundColumn   Binding 6;   �� *Name+6T     5�      $ Price (LKR)��6%   $	 130 6T    6:   �� *Price+6T     5�      $ Resource Person��6%   $	 310 6b    6>   �� *Resource_person+6b   4	  .System.Windows.Controls.DataGridTemplateColumn	  5�      $ Status��6)   $	 110 69    	  CellTemplate 5�      �� 5�      .R�5�      �� -   5        .@�5�   "   �� $��Ongoing��6/    �� 
IsSelected$
 True��6A   �� 5�   "   $��Finished��6/   5�      5�      5�      5�      5�      5�      