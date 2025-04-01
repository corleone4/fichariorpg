<?php

namespace App\Http\Controllers;

use App\Models\CharacterRaces;
use Illuminate\Http\Request;

class RacesController extends Controller
{
    public function create(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'modifiers' => 'required|string|max:255',
        ]);

        $races = CharacterRaces::create($validated);

        if ($races):
            return redirect()->route("dashboard")->with('success', 'Raça adicionada no sistema com sucesso!');
        endif;
    }
}
