Array.prototype.filter||(Array.prototype.filter=function(t,e){"use strict";if("Function"!=typeof t&&"function"!=typeof t||!this)throw new TypeError;var r=this.length>>>0,o=new Array(r),n=this,l=0,i=-1;if(void 0===e)for(;++i!==r;)i in this&&t(n[i],i,n)&&(o[l++]=n[i]);else for(;++i!==r;)i in this&&t.call(e,n[i],i,n)&&(o[l++]=n[i]);return o.length=l,o}),Array.prototype.forEach||(Array.prototype.forEach=function(t){var e,r;if(null==this)throw new TypeError('"this" is null or not defined');var o=Object(this),n=o.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(e=arguments[1]),r=0;r<n;){var l;r in o&&(l=o[r],t.call(e,l,r,o)),r++}}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Array.prototype.indexOf||(Array.prototype.indexOf=function(t,e){var r;if(null==this)throw new TypeError('"this" is null or not defined');var o=Object(this),n=o.length>>>0;if(0===n)return-1;var l=0|e;if(l>=n)return-1;for(r=Math.max(l>=0?l:n-Math.abs(l),0);r<n;){if(r in o&&o[r]===t)return r;r++}return-1}),document.getElementsByClassName||(document.getElementsByClassName=function(t){var e,r,o,n=document,l=[];if(n.querySelectorAll)return n.querySelectorAll("."+t);if(n.evaluate)for(r=".//*[contains(concat(' ', @class, ' '), ' "+t+" ')]",e=n.evaluate(r,n,null,0,null);o=e.iterateNext();)l.push(o);else for(e=n.getElementsByTagName("*"),r=new RegExp("(^|\\s)"+t+"(\\s|$)"),o=0;o<e.length;o++)r.test(e[o].className)&&l.push(e[o]);return l}),document.querySelectorAll||(document.querySelectorAll=function(t){var e,r=document.createElement("style"),o=[];for(document.documentElement.firstChild.appendChild(r),document._qsa=[],r.styleSheet.cssText=t+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",window.scrollBy(0,0),r.parentNode.removeChild(r);document._qsa.length;)(e=document._qsa.shift()).style.removeAttribute("x-qsa"),o.push(e);return document._qsa=null,o}),document.querySelector||(document.querySelector=function(t){var e=document.querySelectorAll(t);return e.length?e[0]:null}),Object.keys||(Object.keys=function(){"use strict";var t=Object.prototype.hasOwnProperty,e=!{toString:null}.propertyIsEnumerable("toString"),r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],o=r.length;return function(n){if("function"!=typeof n&&("object"!=typeof n||null===n))throw new TypeError("Object.keys called on non-object");var l,i,s=[];for(l in n)t.call(n,l)&&s.push(l);if(e)for(i=0;i<o;i++)t.call(n,r[i])&&s.push(r[i]);return s}}()),"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),String.prototype.replaceAll||(String.prototype.replaceAll=function(t,e){return"[object regexp]"===Object.prototype.toString.call(t).toLowerCase()?this.replace(t,e):this.replace(new RegExp(t,"g"),e)}),window.hasOwnProperty=window.hasOwnProperty||Object.prototype.hasOwnProperty;
		if (typeof usi_commons === 'undefined') {
			usi_commons = {
				
				debug: location.href.indexOf("usidebug") != -1 || location.href.indexOf("usi_debug") != -1,
				
				log:function(msg) {
					if (usi_commons.debug) {
						try {
							if (msg instanceof Error) {
								console.log(msg.name + ': ' + msg.message);
							} else {
								console.log.apply(console, arguments);
							}
						} catch(err) {
							usi_commons.report_error_no_console(err);
						}
					}
				},
				log_error: function(msg) {
					if (usi_commons.debug) {
						try {
							if (msg instanceof Error) {
								console.log('%c USI Error:', usi_commons.log_styles.error, msg.name + ': ' + msg.message);
							} else {
								console.log('%c USI Error:', usi_commons.log_styles.error, msg);
							}
						} catch(err) {
							usi_commons.report_error_no_console(err);
						}
					}
				},
				log_success: function(msg) {
					if (usi_commons.debug) {
						try {
							console.log('%c USI Success:', usi_commons.log_styles.success, msg);
						} catch(err) {
							usi_commons.report_error_no_console(err);
						}
					}
				},
				dir:function(obj) {
					if (usi_commons.debug) {
						try {
							console.dir(obj);
						} catch(err) {
							usi_commons.report_error_no_console(err);
						}
					}
				},
				log_styles: {
					error: 'color: red; font-weight: bold;',
					success: 'color: green; font-weight: bold;'
				},
				domain: "https://app.upsellit.com",
				cdn: "https://www.upsellit.com",
				is_mobile: (/iphone|ipod|ipad|android|blackberry|mobi/i).test(navigator.userAgent.toLowerCase()),
				device: (/iphone|ipod|ipad|android|blackberry|mobi/i).test(navigator.userAgent.toLowerCase()) ? 'mobile' : 'desktop',
				gup:function(name) {
					try {
						name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
						var regexS = "[\\?&]" + name + "=([^&#\\?]*)";
						var regex = new RegExp(regexS);
						var results = regex.exec(window.location.href);
						if (results == null) return "";
						else return results[1];
					} catch (e) {
						usi_commons.report_error(e);
					}
				},
				load_script:function(source, callback, nocache) {
					try {
						if (source.indexOf("//") == 0) source = "https:"+source;
						if (source.indexOf("/pixel.jsp") != -1 || source.indexOf("/blank.jsp") != -1 || source.indexOf("/customer_ip.jsp") != -1) {
							source = source.replace(usi_commons.cdn, usi_commons.domain);
						}
						var docHead = document.getElementsByTagName("head")[0];
						//if (top.location != location) docHead = parent.document.getElementsByTagName("head")[0];
						var newScript = document.createElement('script');
						newScript.type = 'text/javascript';
						var usi_appender = "";
						if (!nocache && source.indexOf("/active/") == -1 && source.indexOf("_pixel.jsp") == -1 && source.indexOf("_throttle.jsp") == -1 && source.indexOf("metro") == -1 && source.indexOf("_suppress") == -1 && source.indexOf("product_recommendations") == -1 && source.indexOf("_pid.jsp") == -1 && source.indexOf("_zips") == -1) {
							usi_appender = (source.indexOf("?")==-1?"?":"&");
							if (source.indexOf("pv2.js") != -1) usi_appender = "%7C";
							usi_appender += "si=" + usi_commons.get_sess();
						}
						newScript.src = source + usi_appender;
						if (typeof callback == "function") {
							newScript.onload = function() {
								try {
									callback();
								} catch (e) {
									usi_commons.report_error(e);
								}
							};
						}
						docHead.appendChild(newScript);
					} catch (e) {
						usi_commons.report_error(e);
					}
				},
				load_view:function(usiHash, usiSiteID, usiKey, callback) {
					try {
						if (typeof(usi_force) != "undefined" || location.href.indexOf("usi_force") != -1 || (usi_cookies.get("usi_sale") == null && usi_cookies.get("usi_launched") == null && usi_cookies.get("usi_launched"+usiSiteID) == null)) {
							usiKey = usiKey || "";
							var usi_append = "";
							if (usi_commons.gup("usi_force_date") != "") usi_append = "&usi_force_date=" + usi_commons.gup("usi_force_date");
							else if (typeof usi_cookies !== 'undefined' && usi_cookies.get("usi_force_date") != null) usi_append = "&usi_force_date=" + usi_cookies.get("usi_force_date");
							if (usi_commons.debug) usi_append += "&usi_referrer="+encodeURIComponent(location.href);
							var source = usi_commons.domain + "/view.jsp?hash=" + usiHash + "&siteID=" + usiSiteID + "&keys=" + usiKey + usi_append;
							if (typeof(usi_commons.last_view) !== "undefined" && usi_commons.last_view == usiSiteID+"_"+usiKey) return;
							usi_commons.last_view = usiSiteID+"_"+usiKey;
							if (typeof usi_js !== 'undefined' && typeof usi_js.cleanup === 'function') usi_js.cleanup();
							usi_commons.load_script(source, callback);
						}
					} catch (e) {
						usi_commons.report_error(e);
					}
				},
				remove_loads:function() {
					try {
						if (document.getElementById("usi_obj") != null) {
							document.getElementById("usi_obj").parentNode.parentNode.removeChild(document.getElementById("usi_obj").parentNode);
						}
						if (typeof(usi_commons.usi_loads) !== "undefined") {
							for (var i in usi_commons.usi_loads) {
								if (document.getElementById("usi_"+i) != null) {
									document.getElementById("usi_"+i).parentNode.parentNode.removeChild(document.getElementById("usi_"+i).parentNode);
								}
							}
						}
					} catch (e) {
						usi_commons.report_error(e);
					}
				},
				load:function(usiHash, usiSiteID, usiKey, callback){
					try {
						if (typeof(window["usi_" + usiSiteID]) !== "undefined") return;
						usiKey = usiKey || "";
						var usi_append = "";
						if (usi_commons.gup("usi_force_date") != "") usi_append = "&usi_force_date=" + usi_commons.gup("usi_force_date");
						else if (typeof usi_cookies !== 'undefined' && usi_cookies.get("usi_force_date") != null) usi_append = "&usi_force_date=" + usi_cookies.get("usi_force_date");
						if (usi_commons.debug) usi_append += "&usi_referrer="+encodeURIComponent(location.href);
						var source = usi_commons.domain + "/usi_load.jsp?hash=" + usiHash + "&siteID=" + usiSiteID + "&keys=" + usiKey + usi_append;
						usi_commons.load_script(source, callback);
						if (typeof(usi_commons.usi_loads) === "undefined") {
							usi_commons.usi_loads = {};
						}
						usi_commons.usi_loads[usiSiteID] = usiSiteID;
					} catch (e) {
						usi_commons.report_error(e);
					}
				},
				load_precapture:function(usiQS, usiSiteID, callback) {
					try {
						if (typeof(usi_commons.last_precapture_siteID) !== "undefined" && usi_commons.last_precapture_siteID == usiSiteID) return;
						usi_commons.last_precapture_siteID = usiSiteID;
						var source = usi_commons.domain + "/hound/monitor.jsp?qs=" + usiQS + "&siteID=" + usiSiteID;
						usi_commons.load_script(source, callback);
					} catch (e) {
						usi_commons.report_error(e);
					}
				},
				load_mail:function(qs, siteID, callback) {
					try {
						var source = usi_commons.domain + "/mail.jsp?qs=" + qs + "&siteID=" + siteID + "&domain=" + encodeURIComponent(usi_commons.domain);
						usi_commons.load_script(source, callback);
					} catch (e) {
						usi_commons.report_error(e);
					}
				},
				load_products:function(options) {
					try {
						if (!options.siteID || !options.pid) return;
						var queryStr = "";
						var params = ['siteID', 'association_siteID', 'pid', 'less_expensive', 'rows', 'days_back', 'force_exact', 'match', 'nomatch', 'name_from', 'image_from', 'price_from', 'url_from', 'extra_from', 'custom_callback', 'allow_dupe_names', 'expire_seconds', 'name', 'ordersID', 'cartsID', 'viewsID', 'companyID', 'order_by'];
						params.forEach(function(name, index){
							if (options[name]) {
								queryStr += (index == 0 ? "?" : "&") + name + '=' + options[name];
							}
						});
						if (options.filters) {
							queryStr += "&filters=" + encodeURIComponent(options.filters.map(function(filter){
								return encodeURIComponent(filter);
							}).join("&"));
						}
						usi_commons.load_script(usi_commons.cdn + '/utility/product_recommendations_filter_v3.jsp' + queryStr, function(){
							if (typeof options.callback === 'function') {
								options.callback();
							}
						});
					} catch (e) {
						usi_commons.report_error(e);
					}
				},
				send_prod_rec:function(siteID, info, real_time) {
					var result = false;
					try {
						if (document.getElementsByTagName("html").length > 0 && document.getElementsByTagName("html")[0].className != null && document.getElementsByTagName("html")[0].className.indexOf("translated") != -1) {
							//Ignore translated pages
							return false;
						}
						var data = [siteID, info.name, info.link, info.pid, info.price, info.image];
						if (data.indexOf(undefined) == -1) {
							var queryString = [siteID, info.name.replace(/\|/g, "&#124;"), info.link, info.pid, info.price, info.image].join("|") + "|";
							if (info.extra) queryString += info.extra + "|";
							var filetype = real_time ? "jsp" : "js";
							usi_commons.load_script(usi_commons.domain + "/utility/pv2." + filetype + "?" + encodeURIComponent(queryString));
							result = true;
						}
					} catch (e) {
						usi_commons.report_error(e);
						result = false;
					}
					return result;
				},
				report_error:function(err) {
					if (err == null) return;
					if (typeof err === 'string') err = new Error(err);
					if (!(err instanceof Error)) return;
					if (typeof(usi_commons.error_reported) !== "undefined") {
						return;
					}
					usi_commons.error_reported = true;
					if (location.href.indexOf('usishowerrors') !== -1) throw err;
					else usi_commons.load_script(usi_commons.domain + '/err.jsp?oops=' + encodeURIComponent(err.message) + '-' + encodeURIComponent(err.stack) + "&url=" + encodeURIComponent(location.href));
					usi_commons.log_error(err.message);
					usi_commons.dir(err);
				},
				report_error_no_console:function(err) {
					if (err == null) return;
					if (typeof err === 'string') err = new Error(err);
					if (!(err instanceof Error)) return;
					if (typeof(usi_commons.error_reported) !== "undefined") {
						return;
					}
					usi_commons.error_reported = true;
					if (location.href.indexOf('usishowerrors') !== -1) throw err;
					else usi_commons.load_script(usi_commons.domain + '/err.jsp?oops=' + encodeURIComponent(err.message) + '-' + encodeURIComponent(err.stack) + "&url=" + encodeURIComponent(location.href));
				},
				gup_or_get_cookie: function(name, expireSeconds, forceCookie) {
					try {
						if (typeof usi_cookies === 'undefined') {
							usi_commons.log_error('usi_cookies is not defined');
							return;
						}
						expireSeconds = (expireSeconds || usi_cookies.expire_time.day);
						if (name == "usi_enable") expireSeconds = usi_cookies.expire_time.hour;
						var value = null;
						var qsValue = usi_commons.gup(name);
						if (qsValue !== '') {
							value = qsValue;
							usi_cookies.set(name, value, expireSeconds, forceCookie);
						} else {
							value = usi_cookies.get(name);
						}
						return (value || '');
					} catch (e) {
						usi_commons.report_error(e);
					}
				},
				get_sess: function() {
					var usi_si = null;
					if (typeof(usi_cookies) === "undefined") return "";
					try {
						if (usi_cookies.get('usi_si') == null) {
							var usi_rand_str = Math.random().toString(36).substring(2);
							if (usi_rand_str.length > 6) usi_rand_str = usi_rand_str.substring(0, 6);
							usi_si = usi_rand_str + "_" + Math.round((new Date()).getTime() / 1000);
							usi_cookies.set('usi_si', usi_si, 24*60*60);
							return usi_si;
						}
						if (usi_cookies.get('usi_si') != null) usi_si = usi_cookies.get('usi_si');
						usi_cookies.set('usi_si', usi_si, 24*60*60);
					} catch(err) {
						usi_commons.report_error(err);
					}
					return usi_si;
				},
				get_id: function(usi_append) {
					if (!usi_append) usi_append = "";
					var usi_id = null;
					try {
						if (usi_cookies.get('usi_v') == null && usi_cookies.get('usi_id'+usi_append) == null) {
							var usi_rand_str = Math.random().toString(36).substring(2);
							if (usi_rand_str.length > 6) usi_rand_str = usi_rand_str.substring(0, 6);
							usi_id = usi_rand_str + "_" + Math.round((new Date()).getTime() / 1000);
							usi_cookies.set('usi_id'+usi_append, usi_id, 30 * 86400, true);
							return usi_id;
						}
						if (usi_cookies.get('usi_v') != null) usi_id = usi_cookies.get('usi_v');
						if (usi_cookies.get('usi_id'+usi_append) != null) usi_id = usi_cookies.get('usi_id'+usi_append);
						usi_cookies.set('usi_id'+usi_append, usi_id, 30 * 86400, true);
					} catch(err) {
						usi_commons.report_error(err);
					}
					return usi_id;
				},
				load_session_data: function(extended) {
					try {
						if (usi_cookies.get_json("usi_session_data") == null) {
							usi_commons.load_script(usi_commons.domain + '/utility/session_data.jsp?extended=' + (extended?"true":"false"));
						} else {
							usi_app.session_data = usi_cookies.get_json("usi_session_data");
							if (typeof(usi_app.session_data_callback) !== "undefined") {
								usi_app.session_data_callback();
							}
						}
					} catch(err) {
						usi_commons.report_error(err);
					}
				},
				customer_ip:function(last_purchase) {
					try {
						if (last_purchase != -1) {
							usi_cookies.set("usi_suppress", "1", usi_cookies.expire_time.never);
						} else {
							usi_app.main();
						}
					} catch(err) {
						usi_commons.report_error(err);
					}
				},
				customer_check:function(company_id) {
					try {
						if (!usi_app.is_enabled && !usi_cookies.value_exists("usi_ip_checked")) {
							usi_cookies.set("usi_ip_checked", "1", usi_cookies.expire_time.day);
							usi_commons.load_script(usi_commons.domain + "/utility/customer_ip2.jsp?companyID=" + company_id);
							return false;
						}
						return true;
					} catch(err) {
						usi_commons.report_error(err);
					}
				}
			};
			setTimeout(function() {
				try {
					if (usi_commons.gup_or_get_cookie("usi_debug") != "") usi_commons.debug = true;
					if (usi_commons.gup_or_get_cookie("usi_qa") != "") {
						usi_commons.domain = usi_commons.cdn = "https://prod.upsellit.com";
					}
				} catch(err) {
					usi_commons.report_error(err);
				}
			}, 1000);
		}

if (typeof(usi_app) == "undefined") {
	if("undefined"==typeof usi_cookies){if(usi_cookies={expire_time:{minute:60,hour:3600,two_hours:7200,four_hours:14400,day:86400,week:604800,two_weeks:1209600,month:2592e3,year:31536e3,never:31536e4},max_cookies_count:15,max_cookie_length:1e3,update_window_name:function(e,i,n){try{var t=-1;if(-1!=n){var r=new Date;r.setTime(r.getTime()+1e3*n),t=r.getTime()}var o=window.top||window,l=0;null!=i&&-1!=i.indexOf("=")&&(i=i.replace(RegExp("=","g"),"USIEQLS")),null!=i&&-1!=i.indexOf(";")&&(i=i.replace(RegExp(";","g"),"USIPRNS"));for(var a=o.name.split(";"),u="",f=0;f<a.length;f++){var c=a[f].split("=");3==c.length?(c[0]==e&&(c[1]=i,c[2]=t,l=1),null!=c[1]&&"null"!=c[1]&&(u+=c[0]+"="+c[1]+"="+c[2]+";")):""!=a[f]&&(u+=a[f]+";")}0==l&&(u+=e+"="+i+"="+t+";"),o.name=u}catch(s){}},flush_window_name:function(e){try{for(var i=window.top||window,n=i.name.split(";"),t="",r=0;r<n.length;r++){var o=n[r].split("=");3==o.length&&(0==o[0].indexOf(e)||(t+=n[r]+";"))}i.name=t}catch(l){}},get_from_window_name:function(e){try{for(var i,n,t=(window.top||window).name.split(";"),r=0;r<t.length;r++){var o=t[r].split("=");if(3==o.length){if(o[0]==e&&(n=o[1],-1!=n.indexOf("USIEQLS")&&(n=n.replace(/USIEQLS/g,"=")),-1!=n.indexOf("USIPRNS")&&(n=n.replace(/USIPRNS/g,";")),!("-1"!=o[2]&&0>usi_cookies.datediff(o[2]))))return i=[n,o[2]]}else if(2==o.length&&o[0]==e)return n=o[1],-1!=n.indexOf("USIEQLS")&&(n=n.replace(/USIEQLS/g,"=")),-1!=n.indexOf("USIPRNS")&&(n=n.replace(/USIPRNS/g,";")),i=[n,new Date().getTime()+6048e5]}}catch(l){}return null},datediff:function(e){return e-new Date().getTime()},count_cookies:function(e){return e=e||"usi_",usi_cookies.search_cookies(e).length},root_domain:function(){try{var e=document.domain.split("."),i=e[e.length-1];if("com"==i||"net"==i||"org"==i||"us"==i||"co"==i||"ca"==i)return e[e.length-2]+"."+e[e.length-1]}catch(n){}return 0==document.domain.indexOf("www.")?document.domain.replace("www.",""):document.domain},create_cookie:function(e,i,n){if(!1!==navigator.cookieEnabled&&void 0===window.usi_nocookies){var t="";if(-1!=n){var r=new Date;r.setTime(r.getTime()+1e3*n),t="; expires="+r.toGMTString()}var o="samesite=none;";0==location.href.indexOf("https://")&&(o+="secure;");var l=usi_cookies.root_domain();"undefined"!=typeof usi_parent_domain&&-1!=document.domain.indexOf(usi_parent_domain)&&(l=usi_parent_domain),document.cookie=e+"="+encodeURIComponent(i)+t+"; path=/;domain="+l+"; "+o}},create_nonencoded_cookie:function(e,i,n){if(!1!==navigator.cookieEnabled&&void 0===window.usi_nocookies){var t="";if(-1!=n){var r=new Date;r.setTime(r.getTime()+1e3*n),t="; expires="+r.toGMTString()}var o="samesite=none;";0==location.href.indexOf("https://")&&(o+="secure;");var l=usi_cookies.root_domain();document.cookie=e+"="+i+t+"; path=/;domain="+location.host+"; "+o,document.cookie=e+"="+i+t+"; path=/;domain="+l+"; "+o,document.cookie=e+"="+i+t+"; path=/;domain=; "+o}},read_cookie:function(e){if(!1===navigator.cookieEnabled)return null;var i=e+"=",n=[];try{n=document.cookie.split(";")}catch(t){}for(var r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(i))return decodeURIComponent(o.substring(i.length,o.length))}return null},del:function(e){usi_cookies.set(e,null,-100);try{null!=localStorage&&localStorage.removeItem(e),null!=sessionStorage&&sessionStorage.removeItem(e)}catch(i){}},get_ls:function(e){try{var i=localStorage.getItem(e);if(null!=i){if(0==i.indexOf("{")&&-1!=i.indexOf("usi_expires")){var n=JSON.parse(i);if(new Date().getTime()>n.usi_expires)return localStorage.removeItem(e),null;i=n.value}return decodeURIComponent(i)}}catch(t){}return null},get:function(e){var i=usi_cookies.read_cookie(e);if(null!=i)return i;try{if(null!=localStorage&&(i=usi_cookies.get_ls(e),null!=i))return i;if(null!=sessionStorage&&(i=sessionStorage.getItem(e),void 0===i&&(i=null),null!=i))return decodeURIComponent(i)}catch(n){}var t=usi_cookies.get_from_window_name(e);if(null!=t&&t.length>1)try{i=decodeURIComponent(t[0])}catch(r){return t[0]}return i},get_json:function(e){var i=null,n=usi_cookies.get(e);if(null==n)return null;try{i=JSON.parse(n)}catch(t){n=n.replace(/\\"/g,'"');try{i=JSON.parse(JSON.parse(n))}catch(r){try{i=JSON.parse(n)}catch(o){}}}return i},search_cookies:function(e){e=e||"";var i=[];return document.cookie.split(";").forEach(function(n){var t=n.split("=")[0].trim();(""===e||0===t.indexOf(e))&&i.push(t)}),i},set:function(e,i,n,t){"undefined"!=typeof usi_nevercookie&&!0==usi_nevercookie&&(t=!1),void 0===n&&(n=-1);try{i=i.replace(/(\r\n|\n|\r)/gm,"")}catch(r){}"undefined"==typeof usi_windownameless&&usi_cookies.update_window_name(e+"",i+"",n);try{if(n>0&&null!=localStorage){var o=new Date,l={value:i,usi_expires:o.getTime()+1e3*n};localStorage.setItem(e,JSON.stringify(l))}else null!=sessionStorage&&sessionStorage.setItem(e,i)}catch(a){}if(t||null==i){if(null!=i){if(null==usi_cookies.read_cookie(e)&&!t&&usi_cookies.search_cookies("usi_").length+1>usi_cookies.max_cookies_count){usi_cookies.report_error('Set cookie "'+e+'" failed. Max cookies count is '+usi_cookies.max_cookies_count);return}if(i.length>usi_cookies.max_cookie_length){usi_cookies.report_error('Cookie "'+e+'" truncated ('+i.length+"). Max single-cookie length is "+usi_cookies.max_cookie_length);return}}usi_cookies.create_cookie(e,i,n)}},set_json:function(e,i,n,t){var r=JSON.stringify(i).replace(/^"/,"").replace(/"$/,"");usi_cookies.set(e,r,n,t)},flush:function(e){e=e||"usi_";var i,n,t,r=document.cookie.split(";");for(i=0;i<r.length;i++)0==(n=r[i]).trim().toLowerCase().indexOf(e)&&(t=n.trim().split("=")[0],usi_cookies.del(t));usi_cookies.flush_window_name(e);try{if(null!=localStorage)for(var o in localStorage)0==o.indexOf(e)&&localStorage.removeItem(o);if(null!=sessionStorage)for(var o in sessionStorage)0==o.indexOf(e)&&sessionStorage.removeItem(o)}catch(l){}},print:function(){for(var e=document.cookie.split(";"),i="",n=0;n<e.length;n++){var t=e[n];0==t.trim().toLowerCase().indexOf("usi_")&&(console.log(decodeURIComponent(t.trim())+" (cookie)"),i+=","+t.trim().toLowerCase().split("=")[0]+",")}try{if(null!=localStorage)for(var r in localStorage)0==r.indexOf("usi_")&&"string"==typeof localStorage[r]&&-1==i.indexOf(","+r+",")&&(console.log(r+"="+usi_cookies.get_ls(r)+" (localStorage)"),i+=","+r+",");if(null!=sessionStorage)for(var r in sessionStorage)0==r.indexOf("usi_")&&"string"==typeof sessionStorage[r]&&-1==i.indexOf(","+r+",")&&(console.log(r+"="+sessionStorage[r]+" (sessionStorage)"),i+=","+r+",")}catch(o){}for(var l=(window.top||window).name.split(";"),a=0;a<l.length;a++){var u=l[a].split("=");if(3==u.length&&0==u[0].indexOf("usi_")&&-1==i.indexOf(","+u[0]+",")){var f=u[1];-1!=f.indexOf("USIEQLS")&&(f=f.replace(/USIEQLS/g,"=")),-1!=f.indexOf("USIPRNS")&&(f=f.replace(/USIPRNS/g,";")),console.log(u[0]+"="+f+" (window.name)"),i+=","+t.trim().toLowerCase().split("=")[0]+","}}},value_exists:function(){var e,i;for(e=0;e<arguments.length;e++)if(i=usi_cookies.get(arguments[e]),""===i||null===i||"null"===i||"undefined"===i)return!1;return!0},report_error:function(e){"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.report_error&&usi_commons.report_error(e)}},"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.gup&&"function"==typeof usi_commons.gup_or_get_cookie)try{""!=usi_commons.gup("usi_email_id")?usi_cookies.set("usi_email_id",usi_commons.gup("usi_email_id").split(".")[0],Number(usi_commons.gup("usi_email_id").split(".")[1]),!0):null==usi_cookies.read_cookie("usi_email_id")&&null!=usi_cookies.get_from_window_name("usi_email_id")&&usi_cookies.set("usi_email_id",usi_cookies.get_from_window_name("usi_email_id")[0],(usi_cookies.get_from_window_name("usi_email_id")[1]-new Date().getTime())/1e3,!0),""!=usi_commons.gup_or_get_cookie("usi_debug")&&(usi_commons.debug=!0),""!=usi_commons.gup_or_get_cookie("usi_qa")&&(usi_commons.domain=usi_commons.cdn="https://prod.upsellit.com")}catch(e){usi_commons.report_error(e)}-1!=location.href.indexOf("usi_clearcookies")&&usi_cookies.flush()}
"undefined"==typeof usi_dom&&((usi_dom={}).get_elements=function(e,t){var n=[];return t=t||document,n=Array.prototype.slice.call(t.querySelectorAll(e))},usi_dom.get_first_element=function(e,t){if(""===(e||""))return null;if(t=t||document,"[object Array]"!==Object.prototype.toString.call(e))return t.querySelector(e);for(var n=null,r=0;r<e.length;r++){var i=e[r];if(null!=(n=usi_dom.get_first_element(i,t)))break}return n},usi_dom.get_element_text_no_children=function(e,t){var n="";if(null==t&&(t=!1),null!=(e=e||document)&&null!=e.childNodes)for(var r=0;r<e.childNodes.length;++r)3===e.childNodes[r].nodeType&&(n+=e.childNodes[r].textContent);return!0===t&&(n=usi_dom.clean_string(n)),n.trim()},usi_dom.clean_string=function(e){return"string"!=typeof e?void 0:(e=(e=(e=(e=(e=(e=(e=e.replace(/[\u2010-\u2015\u2043]/g,"-")).replace(/[\u2018-\u201B]/g,"'")).replace(/[\u201C-\u201F]/g,'"')).replace(/\u2024/g,".")).replace(/\u2025/g,"..")).replace(/\u2026/g,"...")).replace(/\u2044/g,"/")).replace(/[^\x20-\xFF\u0100-\u017F\u0180-\u024F\u20A0-\u20CF]/g,"").trim()},usi_dom.string_to_decimal=function(e){var t=null;if("string"==typeof e)try{var n=parseFloat(e.replace(/[^0-9\.-]+/g,""));!1===isNaN(n)&&(t=n)}catch(r){usi_commons.log("Error: "+r.message)}return t},usi_dom.string_to_integer=function(e){var t=null;if("string"==typeof e)try{var n=parseInt(e.replace(/[^0-9-]+/g,""));!1===isNaN(n)&&(t=n)}catch(r){usi_commons.log("Error: "+r.message)}return t},usi_dom.get_absolute_url=function(){var e;return function(t){return(e=e||document.createElement("a")).href=t,e.href}}(),usi_dom.format_currency=function(e,t,n){var r="";return isNaN(e)&&(e=usi_dom.currency_to_decimal(e)),!1===isNaN(e)&&("object"==typeof Intl&&"function"==typeof Intl.NumberFormat?(t=t||"en-US",n=n||{style:"currency",currency:"USD"},r=Number(e).toLocaleString(t,n)):r=e),r},usi_dom.currency_to_decimal=function(e){return 0==e.indexOf("&")&&-1!=e.indexOf(";")?e=e.substring(e.indexOf(";")+1):-1!=e.indexOf("&")&&-1!=e.indexOf(";")&&(e=e.substring(0,e.indexOf("&"))),isNaN(e)&&(e=e.replace(/[^0-9,.]/g,"")),e.indexOf(",")==e.length-3&&(-1!=e.indexOf(".")&&(e=e.replace(".","")),e=e.replace(",",".")),e=e.replace(/[^0-9.]/g,"")},usi_dom.to_decimal_places=function(e,t){if(null==e||"number"!=typeof e||null==t||"number"!=typeof t)return null;if(0==t)return parseFloat(Math.round(e));for(var n=10,r=1;r<t;r++)n*=10;return parseFloat(Math.round(e*n)/n)},usi_dom.trim_string=function(e,t,n){return n=n||"",(e=e||"").length>t&&(e=e.substring(0,t),""!==n&&(e+=n)),e},usi_dom.attach_event=function(e,t,n){var r=usi_dom.find_supported_element(e,n);usi_dom.detach_event(e,t,r),r.addEventListener?r.addEventListener(e,t,!1):r.attachEvent("on"+e,t)},usi_dom.detach_event=function(e,t,n){var r=usi_dom.find_supported_element(e,n);r.removeEventListener?r.removeEventListener(e,t,!1):r.detachEvent("on"+e,t)},usi_dom.find_supported_element=function(e,t){return(t=t||document)===window?window:!0===usi_dom.is_event_supported(e,t)?t:t===document?window:usi_dom.find_supported_element(e,document)},usi_dom.is_event_supported=function(e,t){return null!=t&&void 0!==t["on"+e]},usi_dom.is_defined=function(e,t){if(null==e||""===(t||""))return!1;var n=!0,r=e;return t.split(".").forEach(function(e){!0===n&&(null==r||"object"!=typeof r||!1===r.hasOwnProperty(e)?n=!1:r=r[e])}),n},usi_dom.ready=function(e){void 0!==document.readyState&&"complete"===document.readyState?e():window.addEventListener?window.addEventListener("load",e,!0):window.attachEvent?window.attachEvent("onload",e):setTimeout(e,5e3)},usi_dom.fit_text=function(e,t){t||(t={});var n={multiLine:!0,minFontSize:.1,maxFontSize:20,widthOnly:!1},r={};for(var i in n)t.hasOwnProperty(i)?r[i]=t[i]:r[i]=n[i];var l=Object.prototype.toString.call(e);function o(e,t){a=e.innerHTML,d=parseInt(window.getComputedStyle(e,null).getPropertyValue("font-size"),10),c=(n=e,r=window.getComputedStyle(n,null),(n.clientWidth-parseInt(r.getPropertyValue("padding-left"),10)-parseInt(r.getPropertyValue("padding-right"),10))/d),u=(i=e,l=window.getComputedStyle(i,null),(i.clientHeight-parseInt(l.getPropertyValue("padding-top"),10)-parseInt(l.getPropertyValue("padding-bottom"),10))/d),c&&(t.widthOnly||u)||(t.widthOnly?usi_commons.log("Set a static width on the target element "+e.outerHTML):usi_commons.log("Set a static height and width on the target element "+e.outerHTML)),-1===a.indexOf("textFitted")?((o=document.createElement("span")).className="textFitted",o.style.display="inline-block",o.innerHTML=a,e.innerHTML="",e.appendChild(o)):o=e.querySelector("span.textFitted"),t.multiLine||(e.style["white-space"]="nowrap"),f=t.minFontSize,s=t.maxFontSize;for(var n,r,i,l,o,u,a,c,d,f,p,s,$=f,g=1e3;f<=s&&g>0;)g--,p=s+f-.1,o.style.fontSize=p+"em",o.scrollWidth/d<=c&&(t.widthOnly||o.scrollHeight/d<=u)?($=p,f=p+.1):s=p-.1;o.style.fontSize!==$+"em"&&(o.style.fontSize=$+"em")}"[object Array]"!==l&&"[object NodeList]"!==l&&"[object HTMLCollection]"!==l&&(e=[e]);for(var u=0;u<e.length;u++)o(e[u],r)});
"undefined"==typeof usi_split_test&&(usi_split_test={split_test_name:"usi_dice_roll",split_group:"-1",split_siteID:"-1",split_test_cookie_length:2,get_split_var:function(t){if(t=t||"",null==usi_cookies.get("usi_visitor_id"+t)){var i=Math.random().toString(36).substring(2);i.length>6&&(i=i.substring(0,6));var s="v_"+i+"_"+Math.round(new Date().getTime()/1e3)+"_"+t;return usi_cookies.set("usi_visitor_id"+t,s,86400*this.split_test_cookie_length,!0),s}return usi_cookies.get("usi_visitor_id"+t)},report_test:function(t,i){usi_commons.load_script(usi_commons.domain+"/utility/split_test.jsp?siteID="+t+"&group="+i+"&usi_visitor_id="+this.get_split_var(t)),void 0!==usi_split_test.set_verification&&setTimeout("usi_split_test.set_verification("+i+");",1e3)},get_group:function(t){return usi_cookies.get(this.split_test_name+t)},instantiate_callback:function(t,i){usi_cookies.get("usi_force_group")?i(usi_cookies.get("usi_force_group")):null==usi_cookies.get(this.split_test_name+t)?(usi_app["control_group_callback"+t]=i,usi_commons.load_script(usi_commons.domain+"/utility/split_test.jsp?siteID="+t+"&usi_visitor_id="+this.get_split_var(t))):i(usi_cookies.get(this.split_test_name+t))},instantiate:function(t,i){null==usi_cookies.get(this.split_test_name+t)?(0===i||i&&""!=i?this.split_group=i:Math.random()>.5?this.split_group="0":this.split_group="1",this.report_test(t,this.split_group),usi_cookies.set(this.split_test_name+t,this.split_group,86400*this.split_test_cookie_length,!0)):this.split_group=usi_cookies.get(this.split_test_name+t)}});
"undefined"==typeof usi_date&&((usi_date={}).add_hours=function(e,t){return!1===usi_date.is_date(e)?e:new Date(e.getTime()+36e5*t)},usi_date.add_minutes=function(e,t){return!1===usi_date.is_date(e)?e:new Date(e.getTime()+6e4*t)},usi_date.add_seconds=function(e,t){return!1===usi_date.is_date(e)?e:new Date(e.getTime()+1e3*t)},usi_date.is_date=function(e){return null!=e&&"object"==typeof e&&e instanceof Date==!0&&!1===isNaN(e.getTime())},usi_date.is_after=function(e){try{usi_date.check_format(e);var t=usi_date.set_date(),r=new Date(e);return t.getTime()>r.getTime()}catch(s){"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.report_error&&usi_commons.report_error(s)}return!1},usi_date.is_before=function(e){try{usi_date.check_format(e);var t=usi_date.set_date(),r=new Date(e);return t.getTime()<r.getTime()}catch(s){"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.report_error&&usi_commons.report_error(s)}return!1},usi_date.is_between=function(e,t){return usi_date.check_format(e,t),usi_date.is_after(e)&&usi_date.is_before(t)},usi_date.check_format=function(e,t){(-1!=e.indexOf(" ")||t&&-1!=t.indexOf(" "))&&"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.report_error&&usi_commons.report_error("Incorrect format: Use YYYY-MM-DDThh:mm:ss")},usi_date.string_to_date=function(e,t){t=t||!1;var r=null,s=/^[0-2]?[0-9]\/[0-3]?[0-9]\/\d{4}(\s[0-2]?[0-9]\:[0-5]?[0-9](?:\:[0-5]?[0-9])?)?$/.exec(e),n=/^(\d{4}\-[0-2]?[0-9]\-[0-3]?[0-9])(\s[0-2]?[0-9]\:[0-5]?[0-9](?:\:[0-5]?[0-9])?)?$/.exec(e);if(2===(s||[]).length){if(r=new Date(e),""===(s[1]||"")&&!0===t){var a=new Date;r=usi_date.add_hours(r,a.getHours()),r=usi_date.add_minutes(r,a.getMinutes()),r=usi_date.add_seconds(r,a.getSeconds())}}else if(3===(n||[]).length){var c=n[1].split(/\-/g),i=c[1]+"/"+c[2]+"/"+c[0];return i+=n[2]||"",usi_date.string_to_date(i,t)}return r},usi_date.set_date=function(){var e=new Date,t=usi_commons.gup("usi_force_date");if(""!==t){t=decodeURIComponent(t);var r=usi_date.string_to_date(t,!0);null!=r?(e=r,usi_cookies.set("usi_force_date",t,usi_cookies.expire_time.hour),usi_commons.log("Date forced to: "+e)):usi_cookies.del("usi_force_date")}else e=null!=usi_cookies.get("usi_force_date")?usi_date.string_to_date(usi_cookies.get("usi_force_date"),!0):new Date;return e},usi_date.diff=function(e,t,r,s){null==s&&(s=1),""!=(r||"")&&(r=usi_date.get_units(r));var n=null;if(!0===usi_date.is_date(t)&&!0===usi_date.is_date(e))try{var a=Math.abs(t-e);switch(r){case"ms":n=a;break;case"seconds":n=usi_dom.to_decimal_places(parseFloat(a)/parseFloat(1e3),s);break;case"minutes":n=usi_dom.to_decimal_places(parseFloat(a)/parseFloat(1e3)/parseFloat(60),s);break;case"hours":n=usi_dom.to_decimal_places(parseFloat(a)/parseFloat(1e3)/parseFloat(60)/parseFloat(60),s);break;case"days":n=usi_dom.to_decimal_places(parseFloat(a)/parseFloat(1e3)/parseFloat(60)/parseFloat(60)/parseFloat(24),s)}}catch(c){n=null}return n},usi_date.get_units=function(e){var t="";switch(e.toLowerCase()){case"days":case"day":case"d":t="days";break;case"hours":case"hour":case"hrs":case"hr":case"h":t="hours";break;case"minutes":case"minute":case"mins":case"min":case"m":t="minutes";break;case"seconds":case"second":case"secs":case"sec":case"s":t="seconds";break;case"ms":case"milliseconds":case"millisecond":case"millis":case"milli":t="ms"}return t});
if (typeof usi_aff === 'undefined') {
	usi_aff = {
		fix_linkshare: function() {
			try {
				if (usi_commons.gup("ranSiteID") != "") {
					usi_aff.log_url();
					if (location.href.indexOf("usi_email_id") != -1 || usi_cookies.get("usi_clicked_1") != null) {
						usi_cookies.del("usi_clicked_1");
						var now = new Date();
						var date = now.getUTCFullYear() + ((now.getUTCMonth() + 1 < 10 ? "0" : "") + (now.getUTCMonth() + 1)) + ((now.getUTCDate() < 10 ? "0" : "") + now.getDate());
						var time = (now.getUTCHours() < 10 ? "0" : "") + now.getUTCHours() + ((now.getUTCMinutes() < 10 ? "0" : "") + now.getUTCMinutes());
						usi_cookies.create_nonencoded_cookie("usi_rmStore", "ald:" + date + "_" + time + "|atrv:" + usi_commons.gup("ranSiteID"), usi_cookies.expire_time.month);
					}
				}
				if (usi_cookies.read_cookie("usi_rmStore") != null) {
					usi_cookies.create_nonencoded_cookie("rmStore", usi_cookies.read_cookie("usi_rmStore"), usi_cookies.expire_time.month);
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
		},
		fix_cj: function() {
			try {
				if (usi_commons.gup("cjevent") != "" || usi_commons.gup("CJEVENT") != "") {
					usi_aff.log_url();
					var cjevent = usi_commons.gup("cjevent");
					if (cjevent == "") {
						cjevent = usi_commons.gup("CJEVENT");
					}
					if (location.href.indexOf("usi_email_id") != -1 || usi_cookies.get("usi_clicked_1") != null) {
						usi_cookies.del("usi_clicked_1");
						usi_cookies.create_nonencoded_cookie("usi_cjevent", cjevent, usi_cookies.expire_time.month);
					}
				}
				if (usi_cookies.read_cookie("usi_cjevent") != null) {
					usi_cookies.create_nonencoded_cookie("cjevent", usi_cookies.read_cookie("usi_cjevent"), usi_cookies.expire_time.month);
					localStorage.setItem("as_onsite_cjevent", usi_cookies.read_cookie("usi_cjevent"));
					localStorage.setItem("cjevent", usi_cookies.read_cookie("usi_cjevent"));
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
		},
		fix_sas: function() {
			try {
				if (usi_commons.gup("sscid") != "") {
					usi_aff.log_url();
					if (location.href.indexOf("usi_email_id") != -1 || usi_cookies.get("usi_clicked_1") != null) {
						usi_cookies.del("usi_clicked_1");
						usi_cookies.create_nonencoded_cookie("usi_sscid", usi_commons.gup("sscid"), usi_cookies.expire_time.month);
					}
				}
				if (usi_cookies.read_cookie("usi_sscid") != null) {
					usi_cookies.create_nonencoded_cookie("sas_m_awin", "{\"clickId\":\"" + usi_cookies.read_cookie("usi_sscid")+ "\"}", usi_cookies.expire_time.month);
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
		},
		fix_awin: function(id) {
			try {
				if (usi_commons.gup("awc") != "") {
					usi_aff.log_url();
					if (location.href.indexOf("usi_email_id") != -1 || usi_cookies.get("usi_clicked_1") != null) {
						usi_cookies.del("usi_clicked_1");
						usi_cookies.create_nonencoded_cookie("usi_awc", usi_commons.gup("awc"), usi_cookies.expire_time.month);
						usi_cookies.del("_aw_j_"+id);
					}
				}
				if (usi_cookies.read_cookie("usi_awc") != null) {
					usi_cookies.del("_aw_j_"+id);
					usi_cookies.create_nonencoded_cookie("AwinChannelCookie","aw",30*24*60*60,true);
					usi_cookies.create_nonencoded_cookie("AwinCookie","aw",30*24*60*60,true);
					usi_cookies.create_nonencoded_cookie("_aw_m_"+id, usi_cookies.read_cookie("usi_awc"), usi_cookies.expire_time.month);
					if (typeof(AWIN) !== "undefined") {
						AWIN.Tracking.StorageProvider.setAWC(id, usi_cookies.read_cookie("usi_awc"));
					}
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
		},
		fix_pj: function() {
			try {
				if (usi_commons.gup("clickId") != "") {
					usi_aff.log_url();
					if (location.href.indexOf("usi_email_id") != -1 || usi_cookies.get("usi_clicked_1") != null) {
						usi_cookies.del("usi_clicked_1");
						var now = new Date();
						var usi_days = Math.floor(now / 8.64e7);
						usi_cookies.create_nonencoded_cookie('usi-pjn-click', '[{"id":"' + usi_commons.gup("clickId") + '","days":' + usi_days + ',"type":"p"}]', usi_cookies.expire_time.month);
					}
				}
				if (usi_cookies.read_cookie("usi-pjn-click") != null) {
					usi_cookies.create_nonencoded_cookie("pjn-click", usi_cookies.read_cookie("usi-pjn-click"), usi_cookies.expire_time.month);
					localStorage.setItem("pjnClickData", usi_cookies.read_cookie("usi-pjn-click"));
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
		},
		fix_ir: function(id) {
			try {
				if (usi_commons.gup("irclickid") != "" || usi_commons.gup("clickid") != "") {
					usi_aff.log_url();
					if (location.href.indexOf("usi_email_id") != -1 || usi_cookies.get("usi_clicked_1") != null) {
						usi_cookies.del("usi_clicked_1");
						var usi_click = usi_commons.gup("irclickid");
						if (usi_click == "") {
							usi_click = usi_commons.gup("clickid");
						}
						var date_now = Date.now().toString();
						var cookie_value = date_now + "|-1|" + date_now + "|" + usi_click + "|";
						usi_cookies.create_nonencoded_cookie("usi_IR_" + id, cookie_value, usi_cookies.expire_time.month);
					}
				}
				if (usi_cookies.read_cookie("usi_IR_" + id) != null) {
					usi_cookies.create_nonencoded_cookie("IR_" + id, usi_cookies.read_cookie("usi_IR_" + id), usi_cookies.expire_time.month);
					usi_cookies.create_nonencoded_cookie("irclickid", usi_cookies.read_cookie("usi_IR_" + id).split("|")[3], usi_cookies.expire_time.month);
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
		},
		fix_cf: function() {
			try {
				if (usi_commons.gup("cfclick") != "") {
					usi_aff.log_url();
					if (location.href.indexOf("usi_email_id") != -1 || usi_cookies.get("usi_clicked_1") != null) {
						usi_cookies.del("usi_clicked_1");
						usi_cookies.create_nonencoded_cookie("usi-cfjump-click", usi_commons.gup("cfclick"), usi_cookies.expire_time.month);
					}
				}
				if (usi_cookies.read_cookie("usi-cfjump-click") != null) {
					usi_cookies.create_nonencoded_cookie("cfjump-click", usi_cookies.read_cookie("usi-cfjump-click"), usi_cookies.expire_time.month);
					usi_cookies.create_nonencoded_cookie("cfclick", usi_cookies.read_cookie("usi-cfjump-click"), usi_cookies.expire_time.month);
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
		},
		fix_avantlink:function() {
			try {
				if (usi_commons.gup("avad") != "") {
					usi_aff.log_url();
					if (location.href.indexOf("usi_email_id") != -1 || usi_cookies.get("usi_clicked_1") != null) {
						usi_cookies.del("usi_clicked_1");
						usi_cookies.create_nonencoded_cookie("usi_avad", usi_commons.gup("avad"), usi_cookies.expire_time.month);
						usi_aff.wait_for_avmws = function() {
							if (usi_cookies.get("avmws") != null) {
								usi_cookies.create_nonencoded_cookie("usi_avmws", usi_cookies.get("avmws"), usi_cookies.expire_time.month);
							} else {
								setTimeout(usi_aff.wait_for_avmws, 1000);
							}
						};
						usi_aff.wait_for_avmws();
					}
				}
				if (usi_cookies.read_cookie("usi_avmws") != null) {
					usi_cookies.create_nonencoded_cookie("avmws", usi_cookies.read_cookie("usi_avmws"), usi_cookies.expire_time.month);
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
		},
		get_impact_pixel: function () {
			var pixel = "";
			try {
				var scripts = document.getElementsByTagName("script");
				for (var i = 0; i < scripts.length; i++) {
					var text = scripts[i].innerText;
					if (text && (text.indexOf("ire('trackConversion'") != -1 || text.indexOf('ire("trackConversion"') != -1)) {
						pixel = text.trim().replace(/\s/g, '')
						pixel = pixel.split("trackConversion")[1];
						pixel = pixel.split("});")[0];
						return pixel;
					}
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
			return pixel;
		},
		log_url: function() {
			usi_aff.load_script("https://www.upsellit.com/launch/blank.jsp?aff_click=" + encodeURIComponent(location.href));
		},
		monitor_affiliate_pixel: function (callback) {
			try {
				var pixels = usi_aff.report_affiliate_pixels();
				if (pixels) {
					if (typeof callback === "function") callback(pixels);
					return usi_aff.parse_pixels(pixels);
				}
				setTimeout(function () {
					usi_aff.monitor_affiliate_pixel(callback);
				}, 1000);
			} catch (err) {
				usi_commons.report_error(err);
			}
		},
		parse_pixels: function(pixels){
			try {
				usi_aff.load_script("https://www.upsellit.com/launch/blank.jsp?pixel_found=" + encodeURIComponent(location.href) +"&"+pixels);
			} catch (err) {
				usi_commons.report_error(err);
			}
		},
		report_affiliate_pixels: function () {
			var params = '';
			try {
				var pixels = {
					cj: document.querySelector("[src*='emjcd.com']"),
					sas: document.querySelector("[src*='shareasale.com/sale.cfm']"),
					linkshare: document.querySelector("[src*='track.linksynergy.com']"),
					pj: document.querySelector("[src*='t.pepperjamnetwork.com/track']"),
					avant: document.querySelector("[src*='tracking.avantlink.com/ptcfp.php']"),
					ir: { src: usi_aff.get_impact_pixel() },
					awin1: document.querySelector("[src*='awin1.com/sread']"),
					awin2: document.querySelector("[src*='zenaps.com/sread.js']"),
					cf: document.querySelector("[src*='https://cfjump.'][src*='.com/track']"),
					saasler1: document.querySelector("[src*='engine.saasler.com']"),
					saasler2: document.querySelector("[src*='saasler-impact.herokuapp.com']")
				};
				for (var i in pixels) {
					if (pixels[i] && pixels[i].src) {
						params += '&' + i + '=' + encodeURIComponent(pixels[i].src);
					}
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
			return params;
		},
		load_script: function(source) {
			try {
				var docHead = document.getElementsByTagName("head")[0];
				var newScript = document.createElement('script');
				newScript.type = 'text/javascript';
				newScript.src = source;
				docHead.appendChild(newScript);
			} catch(err) {
				usi_commons.report_error(err);
			}
		}
	}
}


	try {
		usi_app = {};
		usi_app.main = function () {
			try {
				usi_app.company_id = '9354';
				usi_app.url = location.href.toLowerCase();
				usi_app.device = usi_commons.is_mobile ? "mobile" : "desktop";
				usi_app.is_enabled = usi_commons.gup_or_get_cookie("usi_enable", usi_cookies.expire_time.day, true) != "";
				usi_app.user_identity = usi_commons.gup_or_get_cookie("userIdentity", usi_cookies.expire_time.hour, true);
				usi_app.coupon = usi_cookies.value_exists("usi_coupon_applied") ? "" : usi_commons.gup_or_get_cookie("usi_coupon", usi_cookies.expire_time.week, true);
				usi_app.force_version = usi_commons.gup_or_get_cookie("usi_force_version", usi_cookies.expire_time.hour, true) || Math.random();
				usi_app.force_group = usi_commons.gup_or_get_cookie('usi_force_group');


				// Pages
				usi_app.is_cart_page = usi_app.url.match("CART") != null;
				usi_app.is_checkout_page = usi_app.url.match("CHECKOUT") != null;
				usi_app.is_receipt = usi_app.url.match("/receipt") != null;
				usi_app.is_send_money_page = usi_app.url.match("/us/en/web/send-money/start") != null;
				usi_app.is_homepage = usi_app.url.match("https://www.westernunion.com/us/en/home.html") != null;

				// Booleans
				usi_app.is_us_site = usi_app.url.indexOf('/us/en/') != -1
				usi_app.is_english_site = usi_app.url.indexOf('/en/') != -1;
				usi_app.is_spanish_site = usi_app.url.indexOf('/es/') != -1;

				usi_app.is_forced = usi_commons.gup_or_get_cookie("usi_force", usi_cookies.expire_time.hour, true) != "";
				usi_app.force_version = usi_commons.gup_or_get_cookie("usi_force_version", usi_cookies.expire_time.hour, true) || Math.random();
				usi_app.is_suppressed = !usi_app.is_forced && (usi_app.url.match("westernunion.com") == null ||
						usi_app.is_confirmation_page ||
						usi_cookies.value_exists("usi_sale") ||
						usi_app.user_identity == "existingCustomer" ||
						usi_app.user_identity == "newCustomer");

				usi_aff.fix_cj();
				if (usi_cookies.read_cookie("usi_cjevent") != null) {
					usi_cookies.create_nonencoded_cookie("cje", usi_cookies.read_cookie("usi_cjevent"), usi_cookies.expire_time.month);
				}
				usi_app.monitor_for_cj();

				// Check if we've seen a purchase from the user's IP
				if (!usi_cookies.value_exists("usi_ip_checked")) {
					usi_cookies.set("usi_ip_checked", "1", usi_cookies.expire_time.day);
					// Callback is usi_app.customer_ip, if user hasn't purchased it calls usi_app.main
					usi_commons.load_script("https://www.upsellit.com/utility/customer_ip.jsp?companyID=" + usi_app.company_id);
					return;
				}

				// Apply coupons
				if (usi_app.is_send_money_page && (usi_app.coupon != "" || usi_commons.gup_or_get_cookie("usi_coupon") != '')) {
					usi_app.apply_coupon();
					return;
				}

				if(usi_app.is_send_money_page || usi_app.is_homepage) {
					usi_app.monitor_for_transfer_price()
				}

				// Load boost bar
				if (usi_cookies.value_exists("usi_boostbar")) {
					usi_app.boostbar.load();
				}

				usi_app.load();
			} catch(err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.load = function () {
			try {
				usi_commons.log("usi_app.load()");

				if (typeof usi_js !== 'undefined' && typeof usi_js.cleanup === 'function') {
					usi_js.cleanup();
				}
				if (usi_app.is_suppressed) {
					return usi_commons.log("usi_app.load is suppressed");
				}

				if (usi_app.is_us_site){
					usi_commons.log("[usi] 50837 - $0 Transfer Fee Abandon TT");
					usi_commons.load_view("ATGlis4gZJSFyqAvPDhCW7l", "50837", usi_commons.device);
				}
			} catch(err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.grab_cj_order_amt = function() {
			try {
				var cj1 = document.querySelector("[src*='emjcd.com']").src.toLowerCase();
				if (cj1.indexOf("amount=") != -1) {
					return cj1.split("amount=")[1].split("&")[0];
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
			return "";
		};

		usi_app.monitor_for_cj = function() {
			try {
				if (document.querySelector("[src*='emjcd.com']") != null) {
					if (usi_app.grab_cj_order_amt() != "" && usi_app.grab_cj_order_amt() != "0") {
						usi_commons.load_script("https://www.upsellit.com/active/westernunion_pixel.jsp");
					}
				} else {
					setTimeout(usi_app.monitor_for_cj, 2000);
				}
			} catch(err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.monitor_for_transfer_price = function() {
			try {
				if(usi_app.is_send_money_page) {
					var send_amount = null, old_exchange_rate = null, new_exchange_rate = null, difference = null, currency = null;
					// User is in the transfer cash funnel - scrape the actual values and do the math
					if(document.querySelector('#sendAmount') != null) {
						send_amount = Number(document.querySelector('#sendAmount').textContent.replace(/[^0-9.]/g, '').trim().replace(' ', ''));
					}
					if (document.querySelector('#smoExchangeRate span.strikethrough') != null) {
						old_exchange_rate = Number(document.querySelector('#smoExchangeRate span.strikethrough').textContent.replace(/[^0-9.]/g, '').trim().replace(' ', ''));
					} else if (document.querySelector('#exchangeRate.strikethrough') != null) {
						old_exchange_rate = Number(document.querySelector('#exchangeRate.strikethrough').textContent.replace(/[^0-9.]/g, '').trim().replace(' ', ''));
					}
					if (document.querySelector(".summary-widget-row") != null && document.querySelector(".summary-widget-row").innerText.indexOf("=") != -1) {
						new_exchange_rate = Number(document.querySelector(".summary-widget-row").innerText.split('=')[1].replace(/[^0-9.]/g, '').trim().replace(' ', ''));
					} else if (document.querySelector('#exchangeRate:not(.strikethrough)') != null && document.querySelector('#exchangeRate:not(.strikethrough)').textContent.split('=').length > 1) {
						new_exchange_rate = Number(document.querySelector('#exchangeRate:not(.strikethrough)').textContent.split('=')[1].replace(/[^0-9.]/g, '').trim().replace(' ', ''));
					}
					if(send_amount && old_exchange_rate && new_exchange_rate) {
						difference = Number(Number(send_amount * new_exchange_rate) - Number(send_amount * old_exchange_rate)).toFixed(2)
						if (document.querySelector('#receiveAmountCurrencyIsoCode_1') != null) {
							currency = document.querySelector('#receiveAmountCurrencyIsoCode_1').textContent;
						} else if (document.querySelector('#receiveAmountCurrencyIsoCode') != null) {
							currency = document.querySelector('#receiveAmountCurrencyIsoCode').textContent;
						}
					}
					if(difference && !usi_cookies.value_exists('usi_transfer_difference') || (usi_cookies.value_exists('usi_transfer_difference') && difference != usi_cookies.get('usi_transfer_difference'))) {
						if (difference == null) {
							usi_cookies.del('usi_transfer_difference');
						} else {
							usi_cookies.set('usi_transfer_difference', difference, usi_cookies.expire_time.week);
						}
						if (currency == null) {
							usi_cookies.del('usi_transfer_currency');
						} else {
							usi_cookies.set('usi_transfer_currency', currency, usi_cookies.expire_time.week);
						}
						usi_app.load();
					}
				} else if(usi_app.is_homepage) {
					// User is just on the homepage - here the site straight up displays what we want to reiterate
					if(document.querySelector('.extraMoney')) {
						var message = document.querySelector('.extraMoney').textContent
						if(message) {
							if(!usi_cookies.value_exists('usi_transfer_homepage_message') || usi_cookies.get('usi_transfer_homepage_message') != message) {
								usi_cookies.set('usi_transfer_homepage_message', message, usi_cookies.expire_time.week)
								usi_app.load();
							}
						}
					}
				}
			} catch(err) {
				usi_commons.report_error(err);
			}
			setTimeout(usi_app.monitor_for_transfer_price, 2000);
		};

		usi_app.boostbar = {
			load: function(text){
				text = ''
				usi_commons.log("usi_app.boostbar.load()");
				if (usi_cookies.get("usi_boostbar") == "closed") return;

				var boostbar_img = '/chatskins/9354/WesternDigital-TT-2-2024-boostbar-3x-v2.png'
				if(usi_commons.device == 'mobile') {
					boostbar_img = '/chatskins/9354/WesternDigital-TT-2-2024-boostbar-mbl-3x-v2.png'
				}

				var usi_boost_css = [
					'#usi_boost_close {height:100%; width: 33%; right:0%; top:0; bottom:0; position:absolute; color:#fff; font-size:2em; text-decoration:none;}',
					'#usi_boost_container {position:fixed; bottom:0; left:0; right:0; width:100%; text-align:center; font-size:1.25em; color:#fff; line-height: 1; z-index:2147483647;}',
					'.usi_boost_img { width: 100%; }'
				]

				if(usi_commons.device == 'desktop') {
					usi_boost_css.push('.usi_boost_text { position: absolute; color: #CCC; top: 75%; left: 0; width: 100%; font-size: 0.7em; text-align: center;')
				} else {
					usi_boost_css.push('.usi_boost_text { position: absolute; color: #CCC; top: 87%; left: 0; width: 100%; font-size: 0.5em; text-align: center;')
				}

				usi_boost_css = usi_boost_css.join('');
				usi_app.boostbar.place_css(usi_boost_css);

				var usi_boost_container = document.createElement('div');
				usi_boost_container.innerHTML = [
					'<div id="usi_boost_container" aria-description="Register now and get $0 transfer fee on your first digital transfer"">',
					'<img class="usi_boost_img" src="' + usi_commons.cdn + boostbar_img + '"/>',
					'<span class="usi_boost_text">* Western Union makes money from FX. Not available for credit cards and transfers to Cuba.</span>',
					'<a id="usi_boost_close" href="javascript:usi_app.boostbar.close();" aria-label="Close">&nbsp;</a>',
					text,
					'</div>'
				].join('');

				document.body.appendChild(usi_boost_container);
			},
			place_css:function(css) {
				usi_commons.log("usi_app.boostbar.place_css()");
				var usi_css = document.createElement("style");
				usi_css.type = "text/css";
				if (usi_css.styleSheet) usi_css.styleSheet.cssText = css;
				else usi_css.innerHTML = css;
				document.getElementsByTagName('head')[0].appendChild(usi_css);
			},
			close: function(){
				usi_commons.log("usi_app.boostbar.close()");
				var bar = document.getElementById('usi_boost_container');
				usi_cookies.set("usi_boostbar", "closed", usi_cookies.expire_time.week);
				if (bar != null) {
					bar.parentNode.removeChild(bar);
				}
			}
		};

		usi_app.apply_coupon = function() {
			try {
				usi_commons.log("usi_app.apply_coupon()");
				var logoutLink = document.querySelector('a[_ngcontent-serverapp-c5][href="javascript:void(0);"].wu-user-logout');
				var coupon_link,coupon_input,coupon_button;

				if (logoutLink && logoutLink.textContent.trim().toLowerCase() === 'log out') {
					coupon_link = document.querySelector('[amplitude-id="icon-apply-reward-promo"]');
					coupon_input = document.querySelector('input[_ngcontent-serverapp-c31][autocomplete="off"][type="text"][name="txtPromoCdPopUp"][id="txtPromoCdInline2"][aria-labelledby="promo-code-text"][data-float-label][formcontrolname="promoCode"]');
					coupon_button = document.querySelector('[amplitude-id="button-apply-reward-promo"]')
				} else {
					coupon_link = document.querySelector('a[_ngcontent-serverapp-c102][amplitude-id="link-apply-reward-promo"][translate="sendmoneyoption.PromoRewardText"][data-ae-blurbtype="button"]');
					coupon_input = document.querySelector('input[_ngcontent-serverapp-c31][autocomplete="off"][type="text"][name="txtPromoCdPopUp"][id="txtPromoCdInline"][data-float-label]');
					coupon_button = document.querySelector('div[_ngcontent-serverapp-c31][role="button"][tabindex="0"][id="promo-apply-button"]');
				}

				if (coupon_link !== null && coupon_input !== null) {
					coupon_link.click();
					coupon_input.value = usi_app.coupon;
					coupon_input.dispatchEvent(new Event('input', { bubbles: true }));
					coupon_input.focus();
					coupon_input.setSelectionRange(0, coupon_input.value.length);
					coupon_button.disabled = false;
					coupon_button.click();
					setTimeout(function() {
						var close_modal = document.querySelector('.ok-button');
						if (close_modal) {
							close_modal.click();
						}
					}, 2000);
					usi_commons.log("Coupon applied");
				} else {
					if (usi_app.coupon_attempts == undefined) {
						usi_app.coupon_attempts = 0;
					} else if (usi_app.coupon_attempts >= 5) {
						usi_commons.report_error("Coupon elements not found");
						return;
					}
					usi_app.coupon_attempts++;
					usi_commons.log("Coupon elements missing, trying again. Tries: " + usi_app.coupon_attempts);
					setTimeout(usi_app.apply_coupon, 1000);
				}
			} catch(err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.customer_ip = function(last_purchase) {
			try {
				if (last_purchase != -1) {
					usi_cookies.set("usi_suppress", "1", usi_cookies.expire_time.never);
				} else {
					usi_commons.log("usi_app.running main");
					usi_app.main();
				}
			} catch(err) {
				usi_commons.report_error(err);
			}
		};

		
		
		usi_app.session_data_callback = function() {
			usi_app.country = usi_commons.gup("usi_force_country") || usi_app.session_data.country;
			if (usi_app.country !== "us") {
				console.log("USI SUPPRESS session_data_callback");
				return;
			}
			usi_app.check_for_change = function(){
				if (usi_app.current_page == undefined || usi_app.current_page != location.href) {
					usi_app.current_page = location.href;
					usi_dom.ready(function(){
						try {
							setTimeout(usi_app.main, 2000);
						} catch (err) {
							usi_commons.report_error(err);
						}
					});
					usi_commons.log("USI: running main");
				}
				setTimeout(usi_app.check_for_change, 1000);
			};
			if (!usi_app.check_for_change_timeout_id) {
				usi_app.check_for_change_timeout_id = setTimeout(usi_app.check_for_change, 1000);
			}
		};
		usi_commons.load_session_data();
	} catch(err) {
		usi_commons.report_error(err);
	}
}
