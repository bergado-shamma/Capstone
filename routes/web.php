<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

require __DIR__.'/settings.php';

Route::get('/LandingPage', function () {
    return Inertia::render('LandingPage');
});

Route::get('/LogInPage', function () {
    return Inertia::render('LogIn');
});

Route::get('/RegisterPage', function () {
    return Inertia::render('Register');
});