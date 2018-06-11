		function myProgress(){
			(function ($) {
			    $.fn.myProgress = function (options) {
			        initOptions(options);
			        $(this).each(function () {
			            var this_ = $(this);
			            var $percent = $(this).find("div.percent-show span");
			            var progress_in = $(this).find("div.progress-in");
			            initCss(options, $(this));
			            var t = setInterval(function () {
			                $percent.html(parseInt(progress_in.width() / this_.width() * 100))
			            }, options.speed / 100);
			            progress_in.animate({
			                width: options.percent + "%"
			            }, options.speed, function () {
			                clearInterval(t);
			                t = null;
			                $percent.html(options.percent);
			                options.percent == 100 && progress_in.css("border-radius", 0);
			            });
			        });
			        return $(this);
			    }
			
			    function initOptions(options) {
			        (!options.hasOwnProperty("speed") || isNaN(options.speed)) && (options.speed = 1);
			        (!options.hasOwnProperty("percent") || isNaN(options.percent)) && (options.percent = 100);
			        !options.hasOwnProperty("width") && (options.width = '');
			        !options.hasOwnProperty("height") && (options.height = '20px');
			        options.fontSize = Math.floor(parseInt(options.height) * 0.6) + "px";
			        options.lineHeight = options.height;
			    }
			
				function initCss(options, obj) {
				        obj.css({
				            "width": options.width,
				            "height": options.height
				        }).find("div.percent-show").css({
				            "lineHeight": options.lineHeight,
				            "fontSize": options.fontSize
				        });
				    }
				})(jQuery);


			//进度条百分比计算
		    $(function(){
		    	var sumdone=$(".sumdone").html();var sumtotal=$(".sumtotal").html();percent(sumdone,sumtotal);
		    	var linedone=$("#checkdonetimes").html();var linetotal=$("#checktimes").html();percent(linedone,linetotal);
		    	
		    	var done0=$(".checktimes:eq(0)").html();var total0=$(".plantimeslist:eq(0)").html();percent(done0,total0);
		    	var done1=$(".checktimes:eq(1)").html();var total1=$(".plantimeslist:eq(1)").html();percent(done1,total1);
		    	var done2=$(".checktimes:eq(2)").html();var total2=$(".plantimeslist:eq(2)").html();percent(done2,total2);
		    	var done3=$(".checktimes:eq(3)").html();var total3=$(".plantimeslist:eq(3)").html();percent(done3,total3);

		    	function percent(){
	    			var c = (sumdone/sumtotal)*100;
	    			var cline = (linedone/linetotal)*100;
	    			
	    			var c0 =(done0/total0)*100;
	    			var c1 =(done1/total1)*100;
	    			var c2 =(done2/total2)*100;
	    			var c3 =(done3/total3)*100;

	
	    		$('#progsum').myProgress({speed: 0, percent: Math.floor(c)});
	    		$('#progline').myProgress({speed: 0, percent: Math.floor(cline)});
	    		
	    		$('.progtype:eq(0)').myProgress({speed: 0, percent: Math.floor(c0)});
	    		$('.progtype:eq(1)').myProgress({speed: 0, percent: Math.floor(c1)});
	    		$('.progtype:eq(2)').myProgress({speed: 0, percent: Math.floor(c2)});
	    		$('.progtype:eq(3)').myProgress({speed: 0, percent: Math.floor(c3)});

		       };
		    });
		  };
		  



		function myProgress_person(){
			(function ($) {
			    $.fn.myProgress = function (options) {
			        initOptions(options);
			        $(this).each(function () {
			            var this_ = $(this);
			            var $percent = $(this).find("div.percent-show span");
			            var progress_in = $(this).find("div.progress-in");
			            initCss(options, $(this));
			            var t = setInterval(function () {
			                $percent.html(parseInt(progress_in.width() / this_.width() * 100))
			            }, options.speed / 100);
			            progress_in.animate({
			                width: options.percent + "%"
			            }, options.speed, function () {
			                clearInterval(t);
			                t = null;
			                $percent.html(options.percent);
			                options.percent == 100 && progress_in.css("border-radius", 0);
			            });
			        });
			        return $(this);
			    }
			
			    function initOptions(options) {
			        (!options.hasOwnProperty("speed") || isNaN(options.speed)) && (options.speed = 1);
			        (!options.hasOwnProperty("percent") || isNaN(options.percent)) && (options.percent = 100);
			        !options.hasOwnProperty("width") && (options.width = '');
			        !options.hasOwnProperty("height") && (options.height = '20px');
			        options.fontSize = Math.floor(parseInt(options.height) * 0.6) + "px";
			        options.lineHeight = options.height;
			    }
			
				function initCss(options, obj) {
				        obj.css({
				            "width": options.width,
				            "height": options.height
				        }).find("div.percent-show").css({
				            "lineHeight": options.lineHeight,
				            "fontSize": options.fontSize
				        });
				    }
				})(jQuery);


			//监督员进度条百分比计算
		    $(function(){
		    	var pertimes = localStorage.getItem("pertimes");
					console.log(pertimes);
				var dettimes = localStorage.getItem("dettimes");
					console.log(dettimes);
					
		    		var per=new Array();
					var tot=new Array();
					var det=new Array();
					var totdone =new Array();
					var cper=new Array();
					var cdet=new Array();
					var n=pertimes;
					var m=dettimes;
	    			for(var i=0;i<n;i++){
							per[i]=$(".per:eq("+i+")").html();
							tot[i]=$(".tot:eq("+i+")").html();
							percent(per[i],tot[i]);
						}
//	    			console.log(tot)
//	    			console.log(tot.length)
	    			
	    			for(var k=0;k<m;k++){
							det[k] = $(".detdone:eq("+k+")").html();
							totdone[k] = $(".totdone:eq("+k+")").html();
							percent(det[k],totdone[k]);	
						}
//						console.log(totdone)
//						console.log(totdone.length)
		    	
		    	
		    	function percent(){
				for(var j=0;j<n;j++){
					$('.perprog:eq("'+j+'")').myProgress({speed: 0, percent:Math.floor(((per[j]/tot[j])*100))});
				}
				for(var l=0;l<m;l++){
					$('.progdet:eq("'+l+'")').myProgress({speed: 0, percent: Math.floor(((det[l]/totdone[l])*100))});
		    	  }
				};
		    });
		  };