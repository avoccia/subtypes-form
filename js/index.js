// Looks for change to select option
$('#subtype').on('change', function () {
  const selection = $(this).val();

  // UNIVERSAL OPTIONS
  if (selection !== '') {
    $('.attr, .digiKey-PN, .ee-description, .equivalent-allowed, .height, .number, .sub-name, .material-group, .state, .version, .organization-name').css('display', 'flex');
    $('input[name="ee-description"], input[name="height"], input[name="number"], input[name="name"], input[name="extended-material-group"], input[name="state"], input[name="version"], input[name="organization-name"]').attr("required", true);
  }

  // CAPACITOR ONLY OPTIONS
  if (selection === 'capacitor') {
    $('.case-size, .dimension, .esr, .operating-temp, .series, .temp-coefficient, .voltage').css('display', 'flex');
    $('input[name="temp-coefficient"], input[name="voltage"]').attr("required", true);
    $('input[name="case-size"], input[name="dimension"], input[name="esr"], input[name="operating-temp"], input[name="series"], input[name="temp-coefficient"], input[name="voltage"]').attr("disabled", false);
  } else {
    $('.case-size, .dimension, .esr, .operating-temp, .series, .temp-coefficient, .voltage').css('display', 'none');
    $('input[name="temp-coefficient"], input[name="voltage"]').removeAttr("required");
    $('input[name="case-size"], input[name="dimension"], input[name="esr"], input[name="operating-temp"], input[name="series"], input[name="temp-coefficient"], input[name="voltage"]').attr("disabled", true);
  }

  // CONNECTOR ONLY OPTIONS
  if (selection === 'connector') {
    $('.gender').css('display', 'flex');
    $('input[name="gender"]').attr("required", true);
    $('input[name="gender"]').attr("disabled", false);
  } else {
    $('.gender').css('display', 'none');
    $('input[name="gender"]').removeAttr("required");
    $('input[name="gender"]').attr("disabled", true);
  }

  // SWITCH ONLY OPTIONS
  if (selection === 'switch') {
    $('.circuit, .switch-function').css('display', 'flex');
    $('input[name="circuit"], input[name="switch-function"]').attr("required", true);
    $('input[name="circuit"], input[name="switch-function"]').attr("disabled", false);
  } else {
    $('.circuit, .switch-function').css('display', 'none');
    $('input[name="circuit"], input[name="switch-function"]').removeAttr("required");
    $('input[name="circuit"], input[name="switch-function"]').attr("disabled", true);
  }

    // LED ONLY OPTIONS
    if (selection === 'led') {
      $('.color, .millicandela-rating, .viewing-angle, .voltage-forward').css('display', 'flex');
      $('input[name="color"], input[name="millcandela-rating"], input[name="viewing-angle"], input[name="voltage-forward"]').attr("required", true);
      $('input[name="color"], input[name="millicandela-rating"], input[name="viewing-angle"], input[name="voltage-forward"]').attr("disabled", false);
    } else {
      $('.color, .millicandela-rating, .viewing-angle, .voltage-forward').css('display', 'none');
      $('input[name="color"], input[name="millicandela-rating"], input[name="viewing-angle"], input[name="voltage-forward"]').removeAttr("required");
      $('input[name="color"], input[name="millicandela-rating"], input[name="viewing-angle"], input[name="voltage-forward"]').attr("disabled", true);
    }

    // INDUCTOR ONLY OPTIONS
    if (selection === 'inductor') {
      $('.current-rating, .self-resonant, .material-core, .q-at-freq').css('display', 'flex');
      $('input[name="current-rating"], input[name="self-resonant"], input[name="material-core"]').attr("required", true);
      $('input[name="current-rating"], input[name="self-resonant"], input[name="material-core"], input[name="q-at-freq"]').attr("disabled", false);
    } else {
      $('.current-rating, .self-resonant, .material-core, .q-at-freq').css('display', 'none');
      $('input[name="current-rating"]').removeAttr("required");
      $('input[name="current-rating"], input[name="self-resonant"], input[name="material-core"], input[name="q-at-freq"]').attr("disabled", true);
    }

    // DIODE ONLY OPTIONS
    if (selection === 'diode') {
      $('.diode-type, .supplier-device-package').css('display', 'flex');
      $('input[name="diode-type"]').attr("required", true);
      $('input[name="diode-type"], input[name="supplier-device-package"]').attr("disabled", false);
    } else {
      $('.diode-type, .supplier-device-package').css('display', 'none');
      $('input[name="diode-type"]').removeAttr("required");
      $('input[name="diode-type"], input[name="supplier-device-package"]').attr("disabled", true);
    }
  
    // FERRITE BEAD ONLY OPTIONS
    if (selection === 'ferrite') {
      $('.filter-type').css('display', 'flex');
      $('input[name="filter-type"]').attr("required", true);
      $('input[name="filter-type"]').attr("disabled", false);
    } else {
      $('.filter-type').css('display', 'none');
      $('input[name="filter-type"]').removeAttr("required");
      $('input[name="filter-type"]').attr("disabled", true);
    }

    // RESISTOR ONLY OPTIONS
    if (selection === 'resistor') {
      $('.watts').css('display', 'flex');
      $('input[name="watts"]').attr("required", true);
      $('input[name="watts"]').attr("disabled", false);
    } else {
      $('.watts').css('display', 'none');
      $('input[name="watts"]').removeAttr("required");
      $('input[name="watts"]').attr("disabled", true);
    }

  // EQUIVALENT ALLOWED - REQUIRED for everything BUT Capacitor
  if (selection !== 'capacitor') {
    $('input[name="equivalent-allowed"]').attr("required", true);
  } else {
    $('input[name="equivalent-allowed"]').removeAttr("placeholder required");
  }

  // MOUNTING TYPE
  switch (selection) {
    case 'capacitor':
    case 'crystals':
    case 'diode':
    case 'elect-misc':
    case 'ferrite':
    case 'led':
    case 'metal':
    case 'motor':
    case 'switch':
    case 'transistor':
      $('.mounting-type').css('display', 'flex');
      $('input[name="mounting-type"]').attr("required", true);
      $('input[name="mounting-type"]').attr("disabled", false);
      break;
    default:
      $('.mounting-type').css('display', 'none');
      $('input[name="mounting-type"]').removeAttr("required");
      $('input[name="mounting-type"]').attr("disabled", true);
  }

  // PACKAGE
  switch (selection) {
    case 'capacitor':
    case 'inductor':
    case 'integrated':
    case 'resistor':
    case 'transistor':
      $('.package').css('display', 'flex');
      $('input[name="package"]').attr("required", true);
      $('input[name="package"]').attr("disabled", false);
      break;
    case 'crystals':
    case 'diode':
    case 'ferrite':
    case 'filter':
    case 'led':
    case 'microphone':
    case 'sensor':
      $('.package').css('display', 'flex');
      $('input[name="package"]').removeAttr("placeholder required");
      $('input[name="package"]').attr("disabled", false);
      break;
    default:
      $('.package').css('display', 'none');
      $('input[name="package"]').removeAttr("required");
      $('input[name="package"]').attr("disabled", true);
  }

  // PACKAGING
  switch (selection) {
    case 'capacitor':
    case 'crystals':
    case 'elect-misc':
    case 'integrated':
    case 'led':
    case 'metal':
    case 'motor':
    case 'transistor':
      $('.packaging').css('display', 'flex');
      $('input[name="packaging"]').attr("disabled", false);
      break;
    default:
      $('.packaging').css('display', 'none');
      $('input[name="packaging"]').attr("disabled", true);
  }

  // TOLERANCE
  switch (selection) {
    case 'capacitor':
    case 'inductor':
    case 'resistor':
      $('.tolerance').css('display', 'flex');
      $('input[name="tolerance"]').attr("required", true);
      $('input[name="tolerance"]').attr("disabled", false);
      break;
    default: 
      $('.tolerance').css('display', 'none');
      $('input[name="tolerance"]').removeAttr("required");
      $('input[name="tolerance"]').attr("disabled", true);
  }

  // TYPE (EE_TYPE)
  switch (selection) {
    case 'metal':
    case 'motor':
    case 'transistor':
      $('.ee-type').css('display', 'flex');
      $('input[name="ee-type"]').attr("required", true);
      $('input[name="ee-type"]').attr("disabled", false);
      break;
    case 'capacitor':
    case 'crystals':
    case 'elect-misc':
      $('.ee-type').css('display', 'flex');
      $('input[name="ee-type"]').removeAttr("placeholder required");
      $('input[name="ee-type"]').attr("disabled", false);
      break;
    default: 
      $('.ee-type').css('display', 'none');
      $('input[name="ee-type"]').removeAttr("required");
      $('input[name="ee-type"]').attr("disabled", true);
  }

  // VALUE
  switch (selection) {
    case 'capacitor':
    case 'crystals':
    case 'ferrite':
    case 'inductor':
    case 'resistor':
      $('.value').css('display', 'flex');
      $('input[name="value"]').attr("required", true);
      $('input[name="value"]').removeAttr("disabled", false);
      break;
    default:
      $('.value').css('display', 'none');
      $('input[name="value"]').removeAttr("required", true);
      $('input[name="value"]').attr("disabled", true);
  }

});