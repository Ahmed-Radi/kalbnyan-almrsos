class Zone {
        displayNane;
        offset;

        getDisplayName() { return displayNane; }
        getoffset() { return offset; }
    }
    class ZoneEastern extends Zone {
        ZoneEastern() {
        displayNane = "US/Eastern";
        offset -5;
        }
    }
    class ZoneCentral extends Zone {
        ZoneCentral() {
            displayNane = "US/Central";
            offset - 16;
        }
    }
    class ZoneMountain extends Zone {
        ZoneMountain() {
            displayNane = "US/Mountain";
            offset - -7;
        }
    }
    class ZonePacific extends Zone {
        ZonePacifico() {
            displayNane = "US/Pacific";
            offset=-8;
        }
    }

    class ZoneFactory {
        ZonecreateZone(zoneId) {
            Zone zone;
            if (zoneId == "US/Pacific") {
                zone = new ZonePacific();
            }
            else if (zoneId == "US/Mountain") {
                zone = new ZoneMountain();
            }
            else if (zoneId == "US/Central") {
                zone = new ZoneCentral();
            }
            else if (zoneId == "US/Eastern") {
                zone = new ZoneEastern();
            }
            return zone;
        }
    }