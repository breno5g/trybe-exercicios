let picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D MMM YYYY',
  onSelect: function () {
    console.log(this.getMoment().format('Do MMMM YYYY'));
  },
});

cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  alert('Voilà!');
});

cheet('i d d q d', function () {
  alert('god mode enabled');
});
