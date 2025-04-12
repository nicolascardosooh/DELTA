const GoogleMaps = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] px-4 py-6">
      <div className="w-full h-full overflow-hidden rounded-2xl shadow-2xl">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.194934591272!2d-51.71925822365193!3d-29.92952797591415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951973ad52ba06ef%3A0x7405e2d4c26c456b!2sBR-386%2C%20km%20411%20-%20Vendilh%C3%A3o%2C%20Triunfo%20-%20RS%2C%2095780-000!5e0!3m2!1spt-BR!2sbr!4v1712943012345"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMaps;
