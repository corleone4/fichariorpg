<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
<<<<<<< HEAD
=======
        
>>>>>>> 6b0bbc8329878765d473aea05ea15ec8c9b3090c

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
<<<<<<< HEAD

=======
        <!-- <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/> -->
>>>>>>> 6b0bbc8329878765d473aea05ea15ec8c9b3090c
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
<<<<<<< HEAD
    <body class="font-sans antialiased">
=======
    <body className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
>>>>>>> 6b0bbc8329878765d473aea05ea15ec8c9b3090c
        @inertia
    </body>
</html>
