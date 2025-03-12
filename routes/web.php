<?php

use App\Http\Controllers\ClassController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\NewSheetController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/new_sheet', function () {
//     return Inertia::render('NewSheet');
// })->middleware(['auth', 'verified'])->name("new_sheet");

Route::get('/sheets', [NewSheetController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('sheets');

Route::get('/classes', function () {
    return Inertia::render('Classes');
})->middleware(['auth', 'verified'])->name('classes');

Route::get('/new_sheet', [NewSheetController::class, 'load'])->name('new_sheet');

Route::post('/sheet_create', [NewSheetController::class, 'create'])
    ->middleware(['auth', 'verified'])
    ->name('sheets.create');

Route::post('/classes_create', [ClassController::class, 'create'])
    ->middleware(['auth', 'verified'])
    ->name('classes.create');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
