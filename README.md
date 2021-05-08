# Test task: Contacts


### Data is available from the server https://randomuser.me/api/?results=200

Displaying data in the form of a table.
Table row columns:

- Avatar
- Fullname
- Birthday (format - Day of the week, mm / dd / yyyy, hh: mm am, number of years)
- Email (must be clickable with the ability to copy)
- Phone (must be clickable with the ability to copy)
- Location (Country, City)
- Nationality

### It should be possible to switch the data view mode:
* tabular view
* tiled view
The selected value must be referenced in localStorage and in application state.


### It should be possible to filter the data:
* by full name;
* by gender;
* by nationality;



### Show pagination:
* 10 users per page
* the number of pages depends on the number given the filter



### It should be possible to sort data by full name in three states:

* from A to Z
* from Z to A
* original order

You need to sort the entire collection, not just the part that is now in the table
displayed

### Below the table, you need to display statistics on the data

### It should be possible to update the data on a click on the button without reloading the page

