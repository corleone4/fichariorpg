<?php

use App\Http\Controllers\ClassController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\NewSheetController;
use App\Http\Controllers\SheetController;
use App\Models\CharacterSheet;
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

Route::get('/dashboard', [SheetController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::get('/classes', function () {
    return Inertia::render('Class/Classes');
})->middleware(['auth', 'verified'])->name('classes');

Route::get('/new_sheet', [SheetController::class, 'load'])
    ->name('new_sheet');

Route::post('/sheet/create', [SheetController::class, 'create'])
    ->middleware(['auth', 'verified'])
    ->name('sheets.create');

Route::get('/sheets/find/{id}', [SheetController::class, 'show'])
    ->middleware(['auth', 'verified'])
    ->name('sheets.show');

Route::post('/classes/create', [ClassController::class, 'create'])
    ->middleware(['auth', 'verified'])
    ->name('classes.create');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
