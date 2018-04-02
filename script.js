var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$("table").hide();

$('#search').click(searchCountries).click(function(){
    $("table").show();
});

function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {

        var table = $('<table>').appendTo(countriesList);
        var row = $('<tr>').appendTo(table);

        $('<td>').text('Miejsce na flagę').appendTo(row);
        $('<td>').text(item.name).appendTo(row);
        
        var row = $('<tr>').appendTo(table);
        $('<td>').text('capital: ').appendTo(row);
        $('<td>').text(item.capital).appendTo(row);
        
        var row = $('<tr>').appendTo(table);
        $('<td>').text('region: ').appendTo(row);
        $('<td>').text(item.region).appendTo(row);
        
        var row = $('<tr>').appendTo(table);
        $('<td>').text('currencies: ').appendTo(row);
        $('<td>').text(item.currencies).appendTo(row);
       
        var row = $('<tr>').appendTo(table);
        $('<td>').text('languages: ').appendTo(row);
        $('<td>').text(item.languages).appendTo(row);
        
        var row = $('<tr>').appendTo(table);
        $('<td>').text('area: ').appendTo(row);
        $('<td>').text(item.area +  ' km 2').appendTo(row);
    });
}
