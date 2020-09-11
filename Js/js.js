(function () {
   var Message;
   Message = function (arg) {
      (this.text = arg.text), (this.message_side = arg.message_side);
      this.draw = (function (_this) {
         return function () {
            var $message;
            $message = $($(".message_template").clone().html());
            $message
               .addClass(_this.message_side)
               .find(".text")
               .html(_this.text);
            $message
               .find(".timestape")
               .html('1111111');
            $message
               .find(".username")
               .html('Ali');
            $message
               .find(".user_role")
               .html('Admin');
            $(".messages").append($message);
            return setTimeout(function () {
               return $message.addClass("appeared");
            }, 0);
         };
      })(this);
      return this;
   };
   $(function () {
      var getMessageText, message_side, sendMessage;
      message_side = "right";
      getMessageText = function () {
         var $message_input;
         $message_input = $(".message_input");
         return $message_input.val();
      };
      sendMessage = function (text) {
         var $messages, message;
         if (text.trim() === "") {
            return;
         }
         $(".message_input").val("");
         $messages = $(".messages");
         message_side = "right";
         message = new Message({
            text: text,
            message_side: message_side,
         });
         message.draw();
         return $messages.animate(
            { scrollTop: $messages.prop("scrollHeight") },
            300
         );
      };


      getMessage = function (text) {    ///get message form api
         var $messages, message;
         if (text.trim() === "") {
            return;
         }
         $(".message_input").val("");
         $messages = $(".messages");
         message_side = "left";
         message = new Message({
            text: text,
            message_side: message_side,
         });
         message.draw();
         return $messages.animate(
            { scrollTop: $messages.prop("scrollHeight") },
            300
         );
      };


      $(".send_message").click(function (e) {
         return sendMessage(getMessageText());
      });
      $(".message_input").keyup(function (e) {
         if (e.which === 13) {
            return sendMessage(getMessageText());
         }
      });
      
   });
}.call(this));



$(document).ready(function(){
   var darkMod = false;
   $(document).on ("click", ".dark_mode_btn", function () {
      if(darkMod === false){
         $("#dark_mode_btn").css({'color':'white'})
         $(".top_menu").addClass("dark_mode");
         $(".bottom_wrapper").addClass("dark_mode");
         $(".messages").addClass("dark_mode_messages");
         $("#dark_mode_btn").removeClass("fa-moon");
         $("#dark_mode_btn").addClass("fa-sun");
         $(".message_input_wrapper").addClass("dark_mode_message_input_wrapper");
         $(".dark_mod_message_input_wrapper").removeClass("message_input_wrapper");
         $(".message_input").css({'color':'#f2e6ff'});
         $(".message_input").addClass('dark_mode_message_input');
         // alert("Dark Mod Activated");
         darkMod = true;
      }
      else if(darkMod === true){
         $("#dark_mode_btn").css({'color':'#65598A'})
         $(".top_menu").removeClass("dark_mode");
         $(".bottom_wrapper").removeClass("dark_mode");
         $(".messages").removeClass("dark_mode_messages");
         $("#dark_mode_btn").removeClass("fa-sun");
         $("#dark_mode_btn").addClass("fa-moon");
         $(".dark_mod_message_input_wrapper").addClass("message_input_wrapper");
         $(".message_input_wrapper").removeClass("dark_mode_message_input_wrapper");
         $(".message_input").css({'color':'gray'});
         $(".message_input").removeClass('dark_mode_message_input');
         
         darkMod = false;
      }
      
  });
 });