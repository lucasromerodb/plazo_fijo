var lap = 0;
var investment_refund = 0;
var gain_refund = 0;

function calculate() {

	// 30÷365×0,1711×1000 = 14,063013699

	lap += 1;
	var investment_raw = parseFloat($('#new_investment').val());

	if ($.trim($('#new_investment').val()) === '') {
		investment_raw = 0;
	}

	var
		accumulated_investment = parseFloat($('#accumulated_investment').val()),
		accumulated_gain = parseFloat($('#accumulated_gain').val()),

		investment = investment_raw + accumulated_investment + accumulated_gain,
		tna_raw = parseFloat($('#tna').val()),
		tna = tna_raw / 100,
		days = parseFloat($('#day_terms').val()),

		gain = parseFloat((days / 365) * tna * investment),
		refund = investment+gain,

		row =
		'<tr>'+
			'<td>'+lap+'</td>'+
			'<td>$ '+investment.toFixed(2)+'</td>'+
			'<td>'+tna_raw.toFixed(2)+'%</td>'+
			'<td>'+days+'</td>'+
			'<td><span class="label label-success">$ '+gain.toFixed(2)+'</span></td>'+
			'<td><span class="label label-primary">$ '+refund.toFixed(2)+'</span></td>'+
		'</tr>'
		;
		console.log(investment);

	investment_refund = parseFloat(investment_refund) + investment;
	gain_refund = parseFloat(gain_refund) + gain;

	$('#accumulated_investment_sum').text('Inversión: $'+refund.toFixed(2)+' +');
	if (!$('#accumulated_investment_sum').hasClass('is-sum')) {
		if (refund > 0) {
			$('#accumulated_investment_sum').addClass('is-sum');
		}
	}

	$('#investment_refund').text('$ '+investment_refund.toFixed(2));
	$('#gain_refund').text('$ '+gain_refund.toFixed(2));

	$('#accumulated_investment').val(investment);
	$('#accumulated_gain').val(gain);
	$('#f_table__results').append(row);
	$('#new_investment').val('');

	$('.table_results_parent, .accumulated_summary_parent').slideDown();


	// 35211.14591325745

}
