function calcular() {

  // COLETAR E CALCULAR VALORES (1) 
  
  var n1 = document.getElementById('tpfc').value == ""? 0 : parseFloat((document.getElementById('tpfc').value). replace(',', '.'));
  var n2 = document.getElementById('tpfm').value == ""? 0 : parseFloat((document.getElementById('tpfm').value). replace(',', '.'));
  var n3 = document.getElementById('tpfl').value == ""? 0 : parseFloat((document.getElementById('tpfl').value). replace(',', '.'));
  var n4 = document.getElementById('di').value == ""? 0 : parseFloat((document.getElementById('di').value). replace(',', '.'));
  var n5 = document.getElementById('cp').value == ""? 0 : parseFloat((document.getElementById('cp').value). replace(',', '.'));
  var n6 = document.getElementById('fidcs').value == ""? 0 : parseFloat((document.getElementById('fidcs').value). replace(',', '.'));
  var n7 = document.getElementById('faa').value == ""? 0 : parseFloat((document.getElementById('faa').value). replace(',', '.'));
  var n8 = document.getElementById('fab').value == ""? 0 : parseFloat((document.getElementById('fab').value). replace(',', '.'));
  var n9 = document.getElementById('mltm').value == ""? 0 : parseFloat((document.getElementById('mltm').value). replace(',', '.'));
  var n10 = document.getElementById('mbl').value == ""? 0 : parseFloat((document.getElementById('mbl').value). replace(',', '.'));
  var n11 = document.getElementById('fip').value == ""? 0 : parseFloat((document.getElementById('fip').value). replace(',', '.'));
  var n12 = document.getElementById('xtrr').value == ""? 0 : parseFloat((document.getElementById('xtrr').value). replace(',', '.'));
  var trf = (n1 + n2 + n3 + n4 + n5 + n6).toFixed(2);
  var trv = (n7 + n8 + n9 + n10 + n11).toFixed(2);
  var te = (n12).toFixed(2);
  var tg = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12).toFixed(2);
  var pt1 =  (trf * 100 / tg).toFixed(2);
  var pt2 = (trv * 100 / tg).toFixed(2);
  var pt3 = (te * 100 / tg).toFixed(2);
  var rc = (pt1 * 2.86 + pt2 * 3.1 + pt3 * 3.17).toFixed(1)
  document.getElementById('trf').innerHTML = "R$ " + (trf. replace('.', ','));
  document.getElementById('trv').innerHTML = "R$ " + (trv. replace('.', ','));
  document.getElementById('rxtr').innerHTML = "R$ " + (te. replace('.', ','));
  document.getElementById('tg').innerHTML = "R$ " + (tg. replace('.', ','));
  document.getElementById('pUm').innerHTML = isNaN(n1 * 100 / tg)? '0.00' : (n1 * 100 / tg).toFixed(2);
  document.getElementById('pDois').innerHTML = isNaN(n2 * 100 / tg)? '0.00' : (n2 * 100 / tg).toFixed(2);
  document.getElementById('pTres').innerHTML = isNaN(n3 * 100 / tg)? '0.00' : (n3 * 100 / tg).toFixed(2);
  document.getElementById('pQuatro').innerHTML = isNaN(n4 * 100 / tg)? '0.00' : (n4 * 100 / tg).toFixed(2);
  document.getElementById('pCinco').innerHTML = isNaN(n5 * 100 / tg)? '0.00' : (n5 * 100 / tg).toFixed(2);
  document.getElementById('pSeis').innerHTML = isNaN(n6 * 100 / tg)? '0.00' : (n6 * 100 / tg).toFixed(2);
  document.getElementById('pSete').innerHTML = isNaN(n7 * 100 / tg)? '0.00' : (n7 * 100 / tg).toFixed(2);
  document.getElementById('pOito').innerHTML = isNaN(n8 * 100 / tg)? '0.00' : (n8 * 100 / tg).toFixed(2);
  document.getElementById('pNove').innerHTML = isNaN(n9 * 100 / tg)? '0.00' : (n9 * 100 / tg).toFixed(2);
  document.getElementById('pDez').innerHTML = isNaN(n10 * 100 / tg)? '0.00' : (n10 * 100 / tg).toFixed(2);
  document.getElementById('pOnze').innerHTML = isNaN(n11 * 100 / tg)? '0.00' : (n11 * 100 / tg).toFixed(2);
  document.getElementById('pDoze').innerHTML = isNaN(n12 * 100 / tg)? '0.00' : (n12 * 100 / tg).toFixed(2);
  document.getElementById('ptUm').innerHTML = isNaN(pt1)? '0.00' : pt1;
  document.getElementById('ptDois').innerHTML = isNaN(pt2)? '0.00' : pt2;
  document.getElementById('ptTres').innerHTML = isNaN(pt3)? '0.00' : pt3;
  document.getElementById('rc').innerHTML = isNaN(rc)? '0.00' : rc;

    // COLETAR E CALCULAR VALORES (2)

    var n1_2 = document.getElementById('tpfc2').value == ""? 0 : parseFloat((document.getElementById('tpfc2').value). replace(',', '.'));
    var n2_2 = document.getElementById('tpfm2').value == ""? 0 : parseFloat((document.getElementById('tpfm2').value). replace(',', '.'));
    var n3_2 = document.getElementById('tpfl2').value == ""? 0 : parseFloat((document.getElementById('tpfl2').value). replace(',', '.'));
    var n4_2 = document.getElementById('di2').value == ""? 0 : parseFloat((document.getElementById('di2').value). replace(',', '.'));
    var n5_2 = document.getElementById('cp2').value == ""? 0 : parseFloat((document.getElementById('cp2').value). replace(',', '.'));
    var n6_2 = document.getElementById('fidcs2').value == ""? 0 : parseFloat((document.getElementById('fidcs2').value). replace(',', '.'));
    var n7_2 = document.getElementById('faa2').value == ""? 0 : parseFloat((document.getElementById('faa2').value). replace(',', '.'));
    var n8_2 = document.getElementById('fab2').value == ""? 0 : parseFloat((document.getElementById('fab2').value). replace(',', '.'));
    var n9_2 = document.getElementById('mltm2').value == ""? 0 : parseFloat((document.getElementById('mltm2').value). replace(',', '.'));
    var n10_2 = document.getElementById('mbl2').value == ""? 0 : parseFloat((document.getElementById('mbl2').value). replace(',', '.'));
    var n11_2 = document.getElementById('fip2').value == ""? 0 : parseFloat((document.getElementById('fip2').value). replace(',', '.'));
    var n12_2 = document.getElementById('xtrr2').value == ""? 0 : parseFloat((document.getElementById('xtrr2').value). replace(',', '.'));
    var trf_2 = (n1_2 + n2_2 + n3_2 + n4_2 + n5_2 + n6_2).toFixed(2);
    var trv_2 = (n7_2 + n8_2 + n9_2 + n10_2 + n11_2).toFixed(2);
    var te_2 = (n12_2).toFixed(2);
    var tg_2 = (n1_2 + n2_2 + n3_2 + n4_2 + n5_2 + n6_2 + n7_2 + n8_2 + n9_2 + n10_2 + n11_2 + n12_2).toFixed(2);
    var pt1_2 = (trf_2 * 100 / tg_2).toFixed(2);
    var pt2_2 = (trv_2 * 100 / tg_2).toFixed(2);
    var pt3_2 = (te_2 * 100 / tg_2).toFixed(2);
    var rc_2 = (pt1_2 * 2.86 + pt2_2 * 3.1 + pt3_2 * 3.17).toFixed(1)
    document.getElementById('trf2').innerHTML = "R$ " + (trf_2. replace('.', ','));
    document.getElementById('trv2').innerHTML = "R$ " + (trv_2. replace('.', ','));
    document.getElementById('rxtr2').innerHTML = "R$ " + (te_2. replace('.', ','));
    document.getElementById('tg2').innerHTML = "R$ " + (tg_2. replace('.', ','));
    document.getElementById('pUm2').innerHTML = isNaN(n1_2 * 100 / tg_2)? '0.00' : (n1_2 * 100 / tg_2).toFixed(2);
    document.getElementById('pDois2').innerHTML = isNaN(n2_2 * 100 / tg_2)? '0.00' : (n2_2 * 100 / tg_2).toFixed(2);
    document.getElementById('pTres2').innerHTML = isNaN(n3_2 * 100 / tg_2)? '0.00' : (n3_2 * 100 / tg_2).toFixed(2);
    document.getElementById('pQuatro2').innerHTML = isNaN(n4_2 * 100 / tg_2)? '0.00' : (n4_2 * 100 / tg_2).toFixed(2);
    document.getElementById('pCinco2').innerHTML = isNaN(n5_2 * 100 / tg_2)? '0.00' : (n5_2 * 100 / tg_2).toFixed(2);
    document.getElementById('pSeis2').innerHTML = isNaN(n6_2 * 100 / tg_2)? '0.00' : (n6_2 * 100 / tg_2).toFixed(2);
    document.getElementById('pSete2').innerHTML = isNaN(n7_2 * 100 / tg_2)? '0.00' : (n7_2 * 100 / tg_2).toFixed(2);
    document.getElementById('pOito2').innerHTML = isNaN(n8_2 * 100 / tg_2)? '0.00' : (n8_2 * 100 / tg_2).toFixed(2);
    document.getElementById('pNove2').innerHTML = isNaN(n9_2 * 100 / tg_2)? '0.00' : (n9_2 * 100 / tg_2).toFixed(2);
    document.getElementById('pDez2').innerHTML = isNaN(n10_2 * 100 / tg_2)? '0.00' : (n10_2 * 100 / tg_2).toFixed(2);
    document.getElementById('pOnze2').innerHTML = isNaN(n11_2 * 100 / tg_2)? '0.00' : (n11_2 * 100 / tg_2).toFixed(2);
    document.getElementById('pDoze2').innerHTML = isNaN(n12_2 * 100 / tg_2)? '0.00' : (n12_2 * 100 / tg_2).toFixed(2);
    document.getElementById('ptUm2').innerHTML = isNaN(pt1_2)? '0.00' : pt1_2;
    document.getElementById('ptDois2').innerHTML = isNaN(pt2_2)? '0.00' : pt2_2;
    document.getElementById('ptTres2').innerHTML = isNaN(pt3_2)? '0.00' : pt3_2;
    document.getElementById('rc2').innerHTML = isNaN(rc_2)? '0.00' : rc_2;

    // AUMENTO OU DIMINUIÇÃO DO RISCO

    var adre =     
    (2 * n1_2 +
    3 * n2_2 +
    5 * n3_2 +
    2 * n4_2 +
    3 * n5_2 +
    4 * n6_2 +
    4 * n7_2 +
    5 * n8_2 +
    3 * n9_2 +
    5 * n10_2 +
    4 * n11_2 -
    (2 * n1 +
      3 * n2 +
      5 * n3 +
      2 * n4 +
      3 * n5 +
      4 * n6 +
      4 * n7 +
      5 * n8 +
      3 * n9 +
      5 * n10 +
      4 * n11) /
      (
        2 * n1 +
        3 * n2 +
        5 * n3 +
        2 * n4 +
        3 * n5 +
        4 * n6 +
        4 * n7 +
        5 * n8 +
        3 * n9 +
        5 * n10 +
        4 * n11
      )).toFixed(1);

    document.getElementById('adri').innerHTML = isNaN(rc_2 - rc / rc)? 'esperando...' : (rc_2 - rc / rc).toFixed(1);
    document.getElementById('adre').innerHTML = isNaN(adre)? 'esperando...' : adre;
    
    
    



  
}