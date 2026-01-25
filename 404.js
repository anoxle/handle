(function() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('vdc');
    if (code) {
        window.location.replace(`https://anoxle.github.io/vulpes/?vdc=${code}`);
    } else {
        window.location.replace(`https://anoxle.github.io/vulpes/`);
    }
})();