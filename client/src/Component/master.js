var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <base href="<?= asset() ?>" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="source/css/index.css" />
          <link rel="stylesheet" href="source/css/slider.css" />
          {/* <link rel="stylesheet" href="source/css/profile.css"> */}
          <title>Thế Giới Siêu Xe</title>
          {/*?php include('modules/header.php') ?*/}
          <div id="main-contain" className="container" style={{minHeight: 600}}>
            {/*?php include($this-*/}partial) ?&gt;

            <a href="javascript:" id="return-to-top"><i className="fa fa-chevron-up" aria-hidden="true" /></a>
          </div>
          {/*?php include('modules/footer.php') ?*/}
          {/* Script
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>
            <script src="source/js/main.js"></script>
            <script src="source/js/order.js"></script>
                */}
          {/*?php if($this-*/}partial == 'page/order.php'): ?&gt;
          <script src="source/js/auth.js"></script>
          {/*?php endif; ?*/}
          {/* <script>
            $(document).ready(function(){
                refreshCaptcha(1);
                $("#matkhau").keyup(function() {
                passwordStrength($(this).val());
                });
            });
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 300) {   
                $('#return-to-top').fadeIn(200);
            } else {
                $('#return-to-top').fadeOut(200); 
            }
            });
            $('#return-to-top').click(function() { 
                $('body,html').animate({
                    scrollTop : 0 
                }, 500);
            });
    </script> */}
        </div>
      );
    }
  });