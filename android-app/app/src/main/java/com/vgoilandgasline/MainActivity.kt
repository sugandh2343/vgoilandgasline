package com.vgoilandgasline

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.SupportMapFragment
import com.google.android.gms.maps.model.CircleOptions
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.MarkerOptions
import kotlin.math.ceil

class MainActivity : AppCompatActivity(), OnMapReadyCallback {

    private lateinit var quantityInput: EditText
    private lateinit var distanceInput: EditText
    private lateinit var summaryText: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        quantityInput = findViewById(R.id.quantityInput)
        distanceInput = findViewById(R.id.distanceInput)
        summaryText = findViewById(R.id.summaryText)

        val calculateBtn: Button = findViewById(R.id.calculateButton)
        calculateBtn.setOnClickListener { calculateDeliveryCharge() }

        val mapFragment = supportFragmentManager
            .findFragmentById(R.id.mapFragment) as SupportMapFragment
        mapFragment.getMapAsync(this)
    }

    override fun onMapReady(map: GoogleMap) {
        val depot = LatLng(17.385, 78.4867)

        map.addMarker(MarkerOptions().position(depot).title("VGOil Depot"))
        map.addCircle(
            CircleOptions()
                .center(depot)
                .radius(5000.0)
                .strokeColor(0xFF0066CC.toInt())
                .fillColor(0x220066CC)
        )

        map.moveCamera(CameraUpdateFactory.newLatLngZoom(depot, 11f))
    }

    private fun calculateDeliveryCharge() {
        val quantity = quantityInput.text.toString().toDoubleOrNull()
        val distance = distanceInput.text.toString().toDoubleOrNull()

        if (quantity == null || distance == null) {
            summaryText.text = "Please enter quantity and distance."
            return
        }

        if (quantity < 100.0) {
            summaryText.text = "Minimum order quantity is 100 liters."
            return
        }

        if (distance < 0) {
            summaryText.text = "Distance cannot be negative."
            return
        }

        val extraDistance = (distance - 5.0).coerceAtLeast(0.0)
        val deliveryCharge = ceil(extraDistance) * 100

        summaryText.text = "Order OK\nQuantity: ${quantity.toInt()} L\nDistance: %.1f km\nDelivery: ₹%.0f"
            .format(distance, deliveryCharge)
    }
}
