$(document).ready(function(){
    var currentPage = 1;
    var totalPages = 1;

    function fetchData(page) {
        $.ajax({
            url: 'https://api.mydrsappt.com/api/v1/doctors?page=' + page,
            method: 'GET',
            dataType: 'json',
            success: function(response) {
                // Update total pages
                totalPages = response.last_page;

                // Clear previous data
                $('#doctor-table tbody').empty();

                // Parse JSON data
                var doctors = response.data;
                // Iterate through data and construct table rows
                $.each(doctors, function(index, doctor) {
                    var row = '<tr>' +
                                '<td>' + doctor.id + '</td>' +
                                '<td>' + doctor.title + '</td>' +
                                '<td>' + doctor.firstname + '</td>' +
                                '<td>' + doctor.lastname + '</td>' +
                                '<td>' + doctor.practice_name + '</td>' +
                                '<td>' + doctor.contact_number + '</td>' +
                                '<td>' + doctor.email + '</td>' +
                                '<td>' + doctor.city + '</td>' +
                                '<td>' + doctor.state + '</td>' +
                                '<td>' + doctor.country + '</td>' +
                            '</tr>';

                    $('#doctor-table tbody').append(row);
                });
            },
            error: function(xhr, status, error) {
                console.error(error);
            }
        });
    }

    fetchData(currentPage);

    $('#pagination-select').change(function() {
        currentPage = 1;
        fetchData(currentPage);
    });

    $('#refresh-btn').click(function() {
        fetchData(currentPage);
    });

    $('#search-input').keyup(function() {
        var searchText = $(this).val().toLowerCase();
        $('#doctor-table tbody tr').each(function() {
            var firstName = $(this).find('td:nth-child(3)').text().toLowerCase();
            var lastName = $(this).find('td:nth-child(4)').text().toLowerCase();
            if (firstName.indexOf(searchText) === -1 && lastName.indexOf(searchText) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
});