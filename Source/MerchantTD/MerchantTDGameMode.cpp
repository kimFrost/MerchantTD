// Copyright 1998-2017 Epic Games, Inc. All Rights Reserved.

#include "MerchantTDGameMode.h"
#include "MerchantTDPlayerController.h"
#include "MerchantTDPawn.h"

AMerchantTDGameMode::AMerchantTDGameMode()
{
	// no pawn by default
	DefaultPawnClass = AMerchantTDPawn::StaticClass();
	// use our own player controller class
	PlayerControllerClass = AMerchantTDPlayerController::StaticClass();
}
