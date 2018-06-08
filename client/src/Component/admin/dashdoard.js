var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Quản Lí Sản Phẩm</title>
          <meta name="description" content />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="all,follow" />
          <base href="<?= asset() ?>" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="source/admin/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css" />
          {/* Custom icon font*/}
          <link rel="stylesheet" href="source/admin/css/fontastic.css" />
          {/* Google fonts - Roboto */}
          <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
          {/* theme stylesheet*/}
          <link rel="stylesheet" href="source/admin/css/style.default.css" id="theme-stylesheet" />
          {/* Custom stylesheet - for your changes*/}
          <link rel="stylesheet" href="source/admin/css/custom.css" />
          <link rel="stylesheet" href="source/css/scroll.css" />
          {/* Favicon*/}
          <link rel="shortcut icon" href="favicon.png" />
          {/* Side Navbar */}
          {/*?php include('modules/sidemenu.php') ?*/}
          <div className="page home-page">
            <a href="javascript:" id="return-to-top"><i className="fa fa-chevron-up" aria-hidden="true" /></a>
            {/*?php include('modules/header.php') ?*/}
            {/*?php include($this-*/}
            {/*?php include('modules/footer.php') ?*/}
          </div>
          {/* Javascript files*/}
        </div>
      );
    }
  });