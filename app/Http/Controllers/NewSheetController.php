<?php

namespace App\Http\Controllers;

use App\Models\CharacterClass;
use App\Models\CharacterOrigins;
use App\Models\CharacterRaces;
use Illuminate\Http\Request;
use App\Models\CharacterSheet;

class NewSheetController extends Controller
{
    public function create(Request $request)
    {
        // Validação dos dados
        $validated = $request->validate([
            'c_name' => 'required|string|max:255',
            'c_age' => 'required|integer|min:1',
            'c_level' => 'required|integer|min:1',
            'c_race' => 'required|string|max:255',
            'c_origin' => 'required|string|max:255',
            'c_class' => 'required|string|max:255',
            'c_str' => 'required|integer|min:0|max:20',
            'c_dex' => 'required|integer|min:0|max:20',
            'c_vig' => 'required|integer|min:0|max:20',
            'c_dis' => 'required|integer|min:0|max:20',
            'c_know' => 'required|integer|min:0|max:20',
            'c_cat' => 'required|integer|min:0|max:20',
            'c_spi' => 'required|integer|min:0|max:20',
        ]);

        // Debug: Exibir os dados validados
        \Log::info('Dados validados:', $validated);

        // Criar ficha
        $character = CharacterSheet::create($validated);

        // Debug: Exibir se foi criado
        \Log::info('Ficha criada:', $character->toArray());

        return redirect()->route("dashboard")->with('success', 'Ficha criada com sucesso!');
    }
    public function load(){
        $classes = CharacterClass::all();
        $origins = CharacterOrigins::all();
        $races = CharacterRaces::all();
        return inertia('NewSheet', ['classes' => $classes, 'origins' => $origins, 'races' => $races]);
    }
    public function index()
    {
        $sheets = CharacterSheet::all(); // Busca todas as fichas
        return inertia('Sheets', ['sheets' => $sheets]); // Retorna os dados para o React
    }

}

