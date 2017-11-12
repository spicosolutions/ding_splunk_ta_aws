define(["jquery","backbone","underscore","moment"],function(t,e,o,n){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}({0:function(t,e,o){var n,i;n=[o(1),o(3),o(2),o(39),o(4),o(42)],i=function(t,e,o,n,i,s){"use strict";var r=".%Y-%m-%d-";return o.View.extend({constructor:function(t,s,r,l,a,d,c){o.View.apply(this,{model:a,el:r}),this.model=a,this.field=l,this.action=c;var u=i.getField(t,s,l).options;this.disableonEdit="disableonEdit"in u&&u.disableonEdit,e.isUndefined(this.model.get("log_start_date"))&&(this.model.set("log_start_date",n().subtract(7,"days").format("YYYY-MM-DD")),this._checkLogType()),this.listenTo(this.model,"change:log_type",function(){this._checkLogType(),this.render()},this)},events:{"change #log-start-date-field":"_onChangeStartDate","change #distribution-id-field":"_onChangeDistributionID"},render:function(){var t=this.model.get("log_name_format")||"";return t.indexOf(r)!==-1&&(t=t.substring(0,t.length-r.length)),this.$el.html(e.template(s,{log_start_date:this.model.get("log_start_date"),log_type:this.model.get("log_type"),distribution_id:t,disabled:this.disableonEdit&&"edit"===this.action?"disabled":""})),this},_onChangeStartDate:function(e){this.model.set("log_start_date",t(e.target).val())},_onChangeDistributionID:function(e){this.model.set("log_name_format",t(e.target).val()+r)},_checkLogType:function(){var t=this.model.get("log_type");"cloudfront:accesslogs"!==t&&this.model.unset("log_name_format");var e={cloudtrail:"aws:cloudtrail","s3:accesslogs":"aws:s3:accesslogs","cloudfront:accesslogs":"aws:cloudfront:accesslogs","elb:accesslogs":"aws:elb:accesslogs"};this.model.set("sourcetype",e[t]||"")}})}.apply(e,n),!(void 0!==i&&(t.exports=i))},1:function(e,o){e.exports=t},2:function(t,o){t.exports=e},3:function(t,e){t.exports=o},4:function(t,e,o){var n,i;n=[],i=function(){"use strict";return{getField:function(t,e,o){var n=this.getComponent(t,e).entity;return n.find(function(t){return t.field===o})},getComponent:function(t,e){var o=this.getServices(t),n=o.find(function(t){return t.name===e});return n},getServices:function(t){return t.pages.inputs.services}}}.apply(e,n),!(void 0!==i&&(t.exports=i))},39:function(t,e){t.exports=n},42:function(t,e){t.exports='<div class="form-group control-group">\n    <div class="control-label col-sm-2">\n        <p>\n            Log Start Date\n        </p>\n    </div>\n    <div class="col-sm-10 controls control-placeholder">\n        <div class="control shared-controls-textcontrol control-default">\n            <input type="text" id="log-start-date-field" value="<%-log_start_date%>" <%-disabled%>/>\n        </div>\n    </div>\n</div>\n<% if (log_type === "cloudfront:accesslogs") { %>\n    <div class="form-group control-group cloudfront-distribution-group">\n        <div class="control-label col-sm-2">\n            <p>\n                Distribution ID\n            </p>\n        </div>\n        <div class="col-sm-10 controls control-placeholder">\n            <div class="control shared-controls-textcontrol control-default">\n                <input type="text" id="distribution-id-field" value="<%-distribution_id%>" <%-disabled%>/>\n            </div>\n        </div>\n    </div>\n<% } %>'}})});