<!DOCTYPE html>
<html lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <link rel="icon" type="image/png" href="/theme/Muse/favicon.ico?v=1.0.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
    <title>{{$title}}</title>
    <style type="text/css">
    	   .list-pricing li {
            display: block;
            padding: 10px;
        }

        .list-pricing li .ant-avatar {
            box-shadow: 0 .25rem .375rem -.0625rem rgba(20, 20, 20, .12), 0 .125rem .25rem -.0625rem rgba(20, 20, 20, .07) !important;
            margin-right: 16px;
            vertical-align: -6px;
        }

        .qrCode img {
            margin: auto !important;
        }
        .sign-in .col-img .col-left > *{display: none !important;}
        .sign-in .col-img img {
            width: 300px;
            max-width: 200px !important;
        }
        .sign-in .logo-mini {
           height: 58px;
        }
        .sign-in .col-logo .col-left {
            margin-top: 30px;
        }
        .sign-in .col-logo img {
            width: auto !important;
            max-width: 250px !important;
            margin-top: 60px;
        }
        @media (max-width: 600px) {
          .card-billing-info .ant-descriptions-row{
            display: flex;
            flex-direction: column;
          }
          .card-billing-info.ant-card .ant-btn { 
            padding-left: 0;
         }
         .ant-layout-header .ant-col-6:first-child {
             display: none !important;
         }
	.layout-dashboard .header-control {flex: 1;}
	.layout-dashboard .header-control .ant-btn-link {display:none}
         .ant-layout-header .header-control .ant-dropdown-link{
             display: flex;
             align-items: center;
             flex: 1;
             margin-left: auto;
             width: 100%;
             justify-content: flex-end;
         }
        }
        @media (max-width: 992px) {
            .sign-in .logo-mini {
                display: none;
            }
            .sign-in .col-logo img {
                margin-top: 0px;
            }
        }
        .pricing-header{
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.25)), url("/theme/Muse/images/bg-signup.jpg") !important;
        }
        .layout-dashboard .ant-layout-sider.sider-primary.ant-layout-sider-primary .ant-menu-item.ant-menu-item-selected .router-link-active .icon, .layout-dashboard .ant-layout-sider.sider-primary.ant-layout-sider-primary .ant-menu-item .router-link-active .icon {
            background-color: #800FFF !important;
        }
        .sign-in .col-img .col-left::after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background-color: rgba(0,0,0,.45);
        }
    </style>
    <link href="/theme/{{$theme}}/css/animate.min.css" rel="stylesheet">
    <link href="/theme/{{$theme}}/css/chunk-131995da.156653c4.css" rel="prefetch">
    <link href="/theme/{{$theme}}/css/chunk-14072335.a1a40b43.css" rel="prefetch">
    <link href="/theme/{{$theme}}/css/chunk-2c85be8a.5c43ceeb.css" rel="prefetch">
    <link href="/theme/{{$theme}}/css/chunk-2e9fd640.6a05335f.css" rel="prefetch">
    <link href="/theme/{{$theme}}/css/chunk-44a8731e.61fc99db.css" rel="prefetch">
    <link href="/theme/{{$theme}}/css/chunk-4edb8c4c.2983b197.css" rel="prefetch">
    <link href="/theme/{{$theme}}/css/chunk-5842ba96.3439182f.css" rel="prefetch">
    <link href="/theme/{{$theme}}/css/chunk-7d904e62.424c5bfc.css" rel="prefetch">
    <link href="/theme/{{$theme}}/css/chunk-8ca5dd3c.0f95637b.css" rel="prefetch">
    <link href="/theme/{{$theme}}/css/chunk-950bbe7e.da43ede4.css" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-011c055e.f35f08ce.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-131995da.082ae2be.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-14072335.1e4a8fe0.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-2be6418b.470bb799.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-2bfc8798.d407b5c3.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-2c85be8a.63b1f3bb.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-2d0b6cad.ffd9eb8a.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-2d0df46a.85c4f14a.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-2d0e95df.8bc8dd5f.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-2d21aafc.596f8654.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-2d221a15.0e5de43f.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-2d229283.30415213.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-2d22c895.401744d5.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-2e9fd640.8ca7f2cc.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-44a8731e.b06057f5.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-4edb8c4c.678ef16e.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-5842ba96.76edfd4d.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-5d5df8d2.c20b7c50.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-68e7b9f4.56a528b5.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-6c05920e.4e5f7854.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-7d904e62.76ec59b9.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-8ca5dd3c.ccbdec79.js" rel="prefetch">
    <link href="/theme/{{$theme}}/js/chunk-950bbe7e.d3ebab54.js" rel="prefetch">
    <link href="/theme/{{$theme}}/css/app.0bda81e7.css" rel="preload" as="style">
    <link href="/theme/{{$theme}}/js/app.58d673c7.js" rel="preload" as="script">
    <link href="/theme/{{$theme}}/css/app.0bda81e7.css" rel="stylesheet">
</head>
<body style="margin: 0;padding: 0;height: 100%">
    {!! $theme_config['custom_html'] !!}
<div id="app" style="height: 100%"></div>
<script>
    // v1.6.1 版本所有配置项转到后台配置
    window.settings = {
        title: '{{$title}}',
        theme_index: "close",
        plan1_name: "月付套餐",
        plan1_id: '[{{$theme_config['theme_moon']}}]',
        plan2_name: "不限时套餐",
        plan2_id: '[{{$theme_config['theme_moon']}}]',
        tutorial: {
        IOS: "{{$theme_config['theme_ios']}}",
        Android: "{{$theme_config['theme_android']}}",
        Windows: "{{$theme_config['theme_windows']}}",
        Mac: "{{$theme_config['theme_mac']}}",
},
        shared_account: [
        {
            show: true,
            name: "{{$theme_config['theme_id']}}",
            account: "{{$theme_config['theme_account']}}",
            password: "{{$theme_config['theme_password']}}",
            url: "{{$theme_config['theme_url']}}"
        },
        
],
        announcement: ``,
    }
</script>

<script src="/theme/{{$theme}}/i18n/i18n.js"></script>
<script src="/theme/{{$theme}}/i18n/zh_CN.js"></script>
<script src="/theme/{{$theme}}/i18n/en.js"></script>
<script src="/theme/{{$theme}}/js/app.58d673c7.js"></script>
</body>
</html>