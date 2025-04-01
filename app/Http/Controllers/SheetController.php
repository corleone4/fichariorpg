<?php

namespace App\Http\Controllers;
use App\Models\CharacterClass;
use App\Models\CharacterOrigins;
use App\Models\CharacterRaces;
use App\Models\CharacterSheet;
use Inertia\Inertia;
use Illuminate\Http\Request;

class SheetController extends Controller
{   
    public function create(Request $request)
    {
        // Validação dos dados
        $validated = $request->validate([
            'user_id' => 'required|integer|min:1',
            'c_name' => 'required|string|max:255',
            'c_age' => 'required|integer|min:1',
            'c_level' => 'required|integer|min:1',
            'c_race' => 'required|string|max:255',
            'c_origin' => 'required|string|max:255',
            'c_class' => 'required|string|max:255',
            'c_str' => 'required|integer|min:0|max:20',
            'c_dex' => 'required|integer|min:0|max:20',
            'c_con' => 'required|integer|min:0|max:20',
            'c_int' => 'required|integer|min:0|max:20',
            'c_wisd' => 'required|integer|min:0|max:20',
            'c_char' => 'required|integer|min:0|max:20',
        ]);


        $character = CharacterSheet::create($validated);

        \Log::info('Ficha criada:', $character->toArray());
        
        return redirect()->route("dashboard")->with('success', 'Ficha criada com sucesso!');

    }
    public function load(){
        $classes = CharacterClass::all();
        $origins = CharacterOrigins::all();
        $races = CharacterRaces::all();
        return inertia('Sheet/NewSheet', ['classes' => $classes, 'origins' => $origins, 'races' => $races]);
    }
    public function index()
    {
        $user = auth()->user();
        $sheets = $user->characterSheets()->get();
        return Inertia::render('Dashboard', ['sheets' => $sheets]);
    }
    public function show($id)
    {
        $sheet = CharacterSheet::findOrFail($id);
        return inertia('Sheet/SheetsDetails', ['sheet' => $sheet]);
    }
}
