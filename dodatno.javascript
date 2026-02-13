fetch("https://api.hnb.hr/tecajn-eur/v3")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });
