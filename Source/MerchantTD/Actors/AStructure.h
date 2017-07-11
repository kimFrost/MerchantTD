// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "AStructure.generated.h"


//~~~~~ Forward Declarations ~~~~~//



UCLASS(minimalapi)
class AStructure : public AActor
{
	GENERATED_BODY()
	
public:	
	AStructure();

	// Called when the game starts or when spawned
	virtual void BeginPlay() override;
	
	// Called every frame
	virtual void Tick( float DeltaSeconds ) override;

	
};
