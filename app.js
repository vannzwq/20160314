var app = new Vue({
	el: '#app',
	data: {
		month_days: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		bd_33: "1995/02/26",
		bd_zsy: "1994/02/02",
		z3: "2018/05/21",
		max_33: 0,
		now_33: 0,
		max_zsy: 0,
		now_zsy: 0,
		currTime: "载入中",
		year_l: 0,
		month_l: 0,
		day_l: 0,
		day_l_max: 0,
		hour_l: 0,
		minute_l: 0,
		second_l: 0,
	},
	mounted: function () {
		setInterval(() => {
			this.currTime = new Date();
			this.bd_33 = new Date("1995/02/26");
			this.bd_zsy = new Date("1994/02/02");
			this.z3 = new Date("2018/05/21");
			this.max_33 = parseInt((this.currTime.getTime() - this.bd_33.getTime()) / (1000 * 60 * 60 * 24));
			this.now_33 = parseInt((this.currTime.getTime() - this.z3.getTime()) / (1000 * 60 * 60 * 24));
			this.max_zsy = parseInt((this.currTime.getTime() - this.bd_zsy.getTime()) / (1000 * 60 * 60 * 24));
			this.now_zsy = parseInt((this.currTime.getTime() - this.z3.getTime()) / (1000 * 60 * 60 * 24));
			this.year_l = this.currTime.getFullYear();
			this.month_l = this.currTime.getMonth();
			this.day_l = this.currTime.getDate();
			this.hour_l = this.currTime.getHours();
			this.minute_l = this.currTime.getMinutes();
			this.second_l = this.currTime.getSeconds();
			if ((this.year_l % 4 == 0 && this.year_l % 100 != 0) || this.year_l % 400 == 0)
				this.month_days[1]++;
			if (this.month_l < 4 || (this.month_l == 4 && this.day_l < 21))
				this.year_l = this.year_l - 2018 - 1;
			else
				this.year_l = this.year_l - 2018;
			if (this.month_l < 4 || (this.month_l == 4 && this.day_l < 21))
				this.month_l = this.month_l + 12 - 4 - 1;
			else if (this.day_l < 21)
				this.month_l = this.month_l - 4 - 1;
			else
				this.month_l = this.month_l - 4;

			if (this.day_l >= 21) {
				this.day_l = this.day_l - 21;
				this.day_l_max = this.month_days[this.currTime.getMonth()];
			} else {
				this.day_l = this.day_l + this.month_days[this.currTime.getMonth() == 0 ? 11 : this.currTime.getMonth() - 1] - 21;
				this.day_l_max = this.month_days[this.currTime.getMonth() == 0 ? 11 : this.currTime.getMonth() - 1];
			}
		}, 1000)
	}
})
