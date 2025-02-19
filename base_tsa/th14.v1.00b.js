{
	"binhacks": {
		"sprintf_call_esp+34": {
			"addr": [
				"0x47db89",
				"Rx7dc79",
				"0x47dda9"
			]
		},
		"sprintf_long_call": {
			"addr": [
				"0x40bb2e",
				"0x40bdde"
			]
		},
		"sprintf_rep": {
			"addr": [
				"0x40bb3d",
				"0x40bded",
				"0x47dbf8",
				"Rx7dd24",
				"0x47de3b"
			]
		},
		"log_restore": {
			"addr": "0x4075c0"
		},
		"ddc_textbox_size_full": {
			"addr": [
				"0x4327f0",
				"0x4329e7"
			],
			"code": "53e8[GetTextExtent]f30f100d781a4c0083e81c730331c090"
		},
		"spell_name_fetch": {
			"addr": "0x41cefb"
		},
		"spell_align": {
			"addr": "Rx7dc8a"
		},
		"result_spell_align": {
			"addr": "Rx7ddfe"
		},
		"music_title_prepare": {
			"addr": "0x46235d"
		},
		"thcrap_migrate_jump": {
			"addr": "Rx87453"
		},
		"thcrap_migrate_msg": {
			"addr": "Rxb0f3c"
		}
	},
	"breakpoints": {
		"file_size": {
			"addr": "0x402b89"
		},
		"file_load": {
			"addr": "0x402bc4"
		},
		"file_loaded": {
			"addr": "0x464822"
		},
		"spell_id": {
			"addr": "0x428912"
		},
		"spell_id#real": {
			"addr": "0x428949"
		},
		"spell_name": {
			"addr": "0x41cefe"
		},
		"spell_id#result": {
			"addr": "0x46055d"
		},
		"spell_name#result": {
			"addr": "0x460647"
		},
		"spell_name#practice": {
			"addr": "0x463b20"
		},
		"music_title": {
			"addr": "0x462361"
		},
		"music_cmt#line": {
			"addr": [
				"0x46257e",
				"0x462651"
			]
		},
		"music_cmt": {
			"addr": [
				"0x462590",
				"0x462663"
			]
		},
		"ruby_offset": {
			"addr": [
				"Rx3275f",
				"Rx3296a"
			]
		}
	},
	"tsa_font_block": {
		"addr": "Rxfd61c"
	},
	"init_stages": [
		{
			"binhacks": {
				"steamstub_crack": {
					"title": "Crack SteamStub by disabling its integrity check",
					"addr": "Rx102413",
					"code": "eb",
					"expected": "74"
				}
			},
			"breakpoints": {
				"init_next_stage#1": {
					"addr": "Rx103036",
					"module": "eax",
					"cavesize": 6
				},
				"init_next_stage#game": {
					"addr": "Rx101333",
					"cavesize": 5
				}
			}
		},
		{
			"The addresses here are relative to": "SteamDRMP.dll",
			"binhacks": {
				"steamdrm_crack": {
					"title": "Crack SteamDRM: Remove all communication with the Steam client",
					"addr": "Rx66d0",
					"code": "90909090909090909090 b030 884513 e9"
				}
			}
		}
	]
}
