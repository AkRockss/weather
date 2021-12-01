
        const dayElement = document.querySelector(".dag");
        const iconElement = document.querySelector(".weather-icon");
        const temptmaxElement = document.querySelector(".weather-temptmax");
        const temptminElement = document.querySelector(".weather-temptmin");
        
        const day1Element1 = document.querySelector(".dag1");
        const iconElement1 = document.querySelector(".weather-icon1");
        const temptmaxElement1 = document.querySelector(".weather-temptmax1");
        const temptminElement1 = document.querySelector(".weather-temptmin1");


        const day2Element2 = document.querySelector(".dag2");
        const iconElement2 = document.querySelector(".weather-icon2");
        const temptmaxElement2 = document.querySelector(".weather-temptmax2");
        const temptminElement2 = document.querySelector(".weather-temptmin2");


        const day2Element3 = document.querySelector(".dag3");
        const iconElement3 = document.querySelector(".weather-icon3");
        const temptmaxElement3 = document.querySelector(".weather-temptmax3");
        const temptminElement3 = document.querySelector(".weather-temptmin3");


        const day4Element4 = document.querySelector(".dag4");
        const iconElement4 = document.querySelector(".weather-icon4");
        const temptmaxElement4 = document.querySelector(".weather-temptmax4");
        const temptminElement4 = document.querySelector(".weather-temptmin4");


        const day5Element5 = document.querySelector(".dag5");
        const iconElement5 = document.querySelector(".weather-icon5");
        const temptmaxElement5 = document.querySelector(".weather-temptmax5");
        const temptminElement5 = document.querySelector(".weather-temptmin5");


        const day6Element6 = document.querySelector(".dag6");
        const iconElement6 = document.querySelector(".weather-icon6");
        const temptmaxElement6 = document.querySelector(".weather-temptmax6");
        const temptminElement6 = document.querySelector(".weather-temptmin6");
    $.getJSON('https://www.7timer.info/bin/civillight.php?lon=12.1&lat=55.6&ac=0&unit=metric&output=json&tzshift=0', function(data) {
    
    
        var day = `${data.dataseries[0].date}`
        var iconId = `${data.dataseries[0].weather}`    
        var temptmax = `${data.dataseries[0].temp2m.max}`
        var temptmin = `${data.dataseries[0].temp2m.min}`

        const splittet = day.substring(6, );
        const splittet1 = day.substring(4,6);

        dayElement.innerHTML = `${splittet}/${splittet1}`;
        iconElement.innerHTML = `<img src="images/icons/${iconId}.svg" alt="" width=100/>`;
        temptmaxElement.innerHTML = `${temptmax}°C`;
        temptminElement.innerHTML = `${temptmin}°C`;
        
        
        var day1 = `${data.dataseries[1].date}`
        var iconId1 = `${data.dataseries[1].weather}`
        var temptmax1 = `${data.dataseries[1].temp2m.max}`
        var temptmin1 = `${data.dataseries[1].temp2m.min}`

        const day1splittet = day1.substring(6, );
        const day1splittet1 = day1.substring(4,6);

        day1Element1.innerHTML = `${day1splittet}/${day1splittet1}`;
        iconElement1.innerHTML = `<img src="images/icons/${iconId1}.svg" alt="" width=48>`;
        temptmaxElement1.innerHTML = `${temptmax1}°C`;
        temptminElement1.innerHTML = `${temptmin1}°C`;


        var day2 = `${data.dataseries[2].date}`
        var iconId2 = `${data.dataseries[2].weather}`
        var temptmax2 = `${data.dataseries[2].temp2m.max}`
        var temptmin2 = `${data.dataseries[2].temp2m.min}`

        const day2splittet = day2.substring(6, );
        const day2splittet1 = day2.substring(4,6);
        
        day1Element2.innerHTML = `${day2splittet}/${day2splittet1}`;
        iconElement2.innerHTML = `<img src="images/icons/${iconId2}.svg" alt="" width=48/>`;
        temptmaxElement2.innerHTML = `${temptmax2}°C`;
        temptminElement2.innerHTML = `${temptmin2}°C`;


        var day3 = `${data.dataseries[3].date}`
        var iconId3 = `${data.dataseries[3].weather}`
        var temptmax3 = `${data.dataseries[3].temp2m.max}`
        var temptmin3 = `${data.dataseries[3].temp2m.min}`

        
        day1Element3.innerHTML = `${day3splittet}/${day3splittet1}`;
        iconElement3.innerHTML = `<img src="images/icons/${iconId3}.svg" alt="" width=48/>`;
        temptmaxElement3.innerHTML = `${temptmax3}°C`;
        temptminElement3.innerHTML = `${temptmin3}°C`;


        var day4 = `${data.dataseries[4].date}`
        var iconId4 = `${data.dataseries[4].weather}`
        var temptmax4 = `${data.dataseries[4].temp2m.max}`
        var temptmin4 = `${data.dataseries[4].temp2m.min}`

        iconElement4.innerHTML = `<img src="images/icons/${iconId4}.svg" alt="" width=48/>`;
        temptmaxElement4.innerHTML = `${temptmax4}°C`;
        temptminElement4.innerHTML = `${temptmin4}°C`;


        var day5 = `${data.dataseries[5].date}`
        var iconId5 = `${data.dataseries[5].weather}`
        var temptmax5 = `${data.dataseries[5].temp2m.max}`
        var temptmin5 = `${data.dataseries[5].temp2m.min}`

        iconElement5.innerHTML = `<img src="images/icons/${iconId5}.svg" alt="" width=48/>`;
        temptmaxElement5.innerHTML = `${temptmax5}°C`;
        temptminElement5.innerHTML = `${temptmin5}°C`;


        var day6 = `${data.dataseries[6].date}`
        var iconId6 = `${data.dataseries[6].weather}`
        var temptmax6 = `${data.dataseries[6].temp2m.max}`
        var temptmin6 = `${data.dataseries[6].temp2m.min}`

        iconElement6.innerHTML = `<img src="images/icons/${iconId6}.svg" alt="" width=48/>`;
        temptmaxElement6.innerHTML = `${temptmax6}°C`;
        temptminElement6.innerHTML = `${temptmin6}°C`;
    });