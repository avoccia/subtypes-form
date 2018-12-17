// Looks for change to select option
$('#subtype').on('change', function () {
  const selection = $(this).val();

  // UNIVERSAL OPTIONS
  if (selection !== '') {
    $('.attr, .digiKey-PN, .ee-description, .equivalent-allowed, .height').css('display', 'flex');
    $('input[name="subtype_ee-description"], input[name="subtype_height"]').attr("required", true);
  }

  // CAPACITOR ONLY OPTIONS
  if (selection === 'capacitor') {
    $('.case-size, .dimension, .esr, .operating-temp, .series, .temp-coefficient, .voltage').css('display', 'flex');
    $('input[name="subtype_temp-coefficient"], input[name="subtype_voltage"]').attr("required", true);
  } else {
    $('.case-size, .dimension, .esr, operating-temp, .series, .temp-coefficient, .voltage').css('display', 'none');
    $('input[name="subtype_temp-coefficient"], input[name="subtype_voltage"]').removeAttr("required");
    
  }

  // CONNECTOR ONLY OPTIONS
  if (selection === 'connector') {
    $('.gender').css('display', 'flex');
    $('input[name="subtype_gender"]').attr("required", true);
  } else {
    $('.gender').css('display', 'none');
    $('input[name="subtype_gender"]').removeAttr("required");
  }

  // SWITCH ONLY OPTIONS
  if (selection === 'switch') {
    $('.circuit, .switch-function').css('display', 'flex');
    $('input[name="subtype_circuit"], input[name="subtype_switch-function"]').attr("required", true);
  } else {
    $('.circuit, .switch-function').css('display', 'none');
    $('input[name="subtype_circuit"], input[name="subtype_switch-function"]').removeAttr("required");
  }

    // LED ONLY OPTIONS
    if (selection === 'led') {
      $('.color, .millicandela-rating, .viewing-angle, .voltage-forward').css('display', 'flex');
      $('input[name="subtype_color"], input[name="subtype_millcandela-rating"], input[name="subtype_viewing-angle"], input[name="subtype_voltage-forward"]').attr("required", true);
    } else {
      $('.color, .millicandela-rating, .viewing-angle, .voltage-forward').css('display', 'none');
      $('input[name="subtype_color"], input[name="subtype_millcandela-rating"], input[name="subtype_viewing-angle"], input[name="subtype_voltage-forward"]').removeAttr("required");
    }

    // INDUCTOR ONLY OPTIONS
    if (selection === 'inductor') {
      $('.current-rating, .self-resonant, .material-core, .q-at-freq').css('display', 'flex');
      $('input[name="subtype_current-rating"], input[name="subtype_self-resonant"], input[name="subtype_material-core"]').attr("required", true);
    } else {
      $('.current-rating, .self-resonant, .material-core, .q-at-freq').css('display', 'none');
      $('input[name="subtype_current-rating"]').removeAttr("required");
    }

    // DIODE ONLY OPTIONS
    if (selection === 'diode') {
      $('.diode-type, .supplier-device').css('display', 'flex');
      $('input[name="subtype_diode-type"]').attr("required", true);
    } else {
      $('.diode-type, .supplier-device').css('display', 'none');
      $('input[name="subtype_diode-type"]').removeAttr("required");
    }
  
    // FERRITE BEAD ONLY OPTIONS
    if (selection === 'ferrite') {
      $('.filter-type').css('display', 'flex');
      $('input[name="subtype_filter-type"]').attr("required", true);
    } else {
      $('.diode-type').css('display', 'none');
      $('input[name="subtype_diode-type"]').removeAttr("required");
    }

    // RESISTOR ONLY OPTIONS
    if (selection === 'resistor') {
      $('.watts').css('display', 'flex');
      $('input[name="subtype_watts"]').attr("required", true);
    } else {
      $('.watts').css('display', 'none');
      $('input[name="subtype_watts"]').removeAttr("required");
    }

  // EQUIVALENT ALLOWED - REQUIRED for everything BUT Capactiro
  if (selection !== 'capacitor') {
    $('input[name="subtype_equivalent-allowed"]').attr("required", true);
  } else {
    $('input[name="subtype_equivalent-allowed"]').removeAttr("placeholder required");
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
      $('input[name="subtype_mounting-type"]').attr("required", true);
      break;
    default:
      $('.mounting-type').css('display', 'none');
      $('input[name="subtype_mounting-type"]').removeAttr("required");
  }

  // PACKAGE
  switch (selection) {
    case 'capacitor':
    case 'inductor':
    case 'integrated':
    case 'resistor':
    case 'transistor':
      $('.package').css('display', 'flex');
      $('input[name="subtype_package"]').attr("required", true);
      break;
    case 'crystals':
    case 'diode':
    case 'ferrite':
    case 'filter':
    case 'led':
    case 'microphone':
    case 'sensor':
      $('.package').css('display', 'flex');
      $('input[name="subtype_package"]').removeAttr("placeholder required");
      break;
    default:
      $('.package').css('display', 'none');
      $('input[name="subtype_package"]').removeAttr("required");
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
      break;
    default:
      $('.packaging').css('display', 'none');
  }

  // TOLERANCE
  switch (selection) {
    case 'capacitor':
    case 'inductor':
    case 'resistor':
      $('.tolerance').css('display', 'flex');
      $('input[name="subtype_tolerance"]').attr("required", true);
      break;
    default: 
      $('.tolerance').css('display', 'none');
      $('input[name="subtype_tolerance"]').removeAttr("required");
  }

  // TYPE (EE_TYPE)
  switch (selection) {
    case 'metal':
    case 'motor':
    case 'transistor':
      $('.ee-type').css('display', 'flex');
      $('input[name="subtype_ee-type"]').attr("required", true);
      break;
    case 'capacitor':
    case 'crystals':
    case 'elect-misc':
      $('.ee-type').css('display', 'flex');
      $('input[name="subtype_ee-type"]').removeAttr("placeholder required");
      break;
    default: 
      $('.ee-type').css('display', 'none');
      $('input[name="ee-type"]').removeAttr("required");
  }

  // VALUE
  switch (selection) {
    case 'capacitor':
    case 'crystals':
    case 'ferrite':
    case 'inductor':
    case 'resistor':
      $('.value').css('display', 'flex');
      $('input[name="subtype_value"]').attr("required", true);
      break;
    default:
      $('.value').css('display', 'none');
      $('input[name="subtype_value"]').removeAttr("required", true);
  }

});